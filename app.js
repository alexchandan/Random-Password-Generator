const input = document.querySelector('#input-box');
const generateBtn = document.querySelector('#generate-btn');
const copyBtn = document.querySelector('#copy-btn');

const generatePassword = () => {
    let char = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * char.length);
        password += char.substring(randomNum, randomNum + 1)
    }
    input.value = password;
}

generateBtn.addEventListener('click', generatePassword)

const copyPassword = () => {
    input.select()
    navigator.clipboard.writeText(input.value);
}

copyBtn.addEventListener('click', copyPassword)