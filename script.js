// Character sets for password generation
const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// Selecting DOM elements
const slider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const generateBtn = document.getElementById('generateBtn');
const display = document.getElementById('passwordDisplay');

// Update length display when slider moves
slider.oninput = () => {
    lengthValue.innerText = slider.value;
};

/**
 * Function to generate a random password based on user preferences
 */
function generatePassword() {
    let charPool = "";
    
    // Check which options are selected and add to the pool
    if (document.getElementById('uppercase').checked) charPool += charSets.uppercase;
    if (document.getElementById('lowercase').checked) charPool += charSets.lowercase;
    if (document.getElementById('numbers').checked) charPool += charSets.numbers;
    if (document.getElementById('symbols').checked) charPool += charSets.symbols;

    // Validation: Return error message if no option is selected
    if (charPool === "") {
        return "Select Options!";
    }

    let password = "";
    const length = slider.value;
    
    // Loop to pick random characters from the pool
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    
    return password;
}

// Event listener for the Generate button
generateBtn.addEventListener('click', () => {
    display.innerText = generatePassword();
});

/**
 * Function to copy the generated password to clipboard
 * Includes validation to prevent copying error messages
 */
function copyPassword() {
    const password = display.innerText;

    // Prevent copying if no password has been generated
    if (!password || password === "Select Options!" || password === "P@ssword123") {
        alert("Please select options and generate a password first.");
        return;
    }

    // Use Clipboard API to copy text
    navigator.clipboard.writeText(password).then(() => {
        alert("Success! Password copied to clipboard.");
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}
