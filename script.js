const passwordDisplay = document.getElementById('password-display');
const lengthSlider = document.getElementById('length-slider');
const lengthVal = document.getElementById('length-val');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]\:;?><,./-='
};

lengthSlider.oninput = () => lengthVal.innerText = lengthSlider.value;

function generatePassword() {
    let charPool = "";
    if (document.getElementById('lowercase').checked) charPool += charSets.lowercase;
    if (document.getElementById('uppercase').checked) charPool += charSets.uppercase;
    if (document.getElementById('numbers').checked) charPool += charSets.numbers;
    if (document.getElementById('symbols').checked) charPool += charSets.symbols;

    if (charPool === "") return "Select Options!";

    let password = "";
    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    return password;
}

generateBtn.addEventListener('click', () => {
    passwordDisplay.innerText = generatePassword();
});

copyBtn.addEventListener('click', () => {
    const text = passwordDisplay.innerText;
    if(text === "P@ssw0rd123") return;
    navigator.clipboard.writeText(text);
    alert("Password copied to clipboard!");
});