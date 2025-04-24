const form = document.getElementById('form')
const passwordLengthInput = document.getElementById('input')
const containUppercaseLetters = document.getElementById('contain-uppercase-letters')
const containLowercaseLetters = document.getElementById('contain-lowercase-letters')
const containNumbers = document.getElementById('contain-numbers')
const containSpecialCharacters = document.getElementById('contain-special-characters')

passwordLengthInput.addEventListener('keyup', () => {
    passwordLengthInput.value = passwordLengthInput.value.replace(/\D/g, '')
})

const generatePassword = (length) => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const numbers = '0123456789'.split('')
    const specialCharacters = `'"!@#$%&*()-_=+\`[{\~^]}\\|,<.>;:/?`.split('')

    const characterTypes = [
        { checked: containUppercaseLetters.checked, characters: uppercaseLetters },
        { checked: containLowercaseLetters.checked, characters: lowercaseLetters },
        { checked: containNumbers.checked, characters: numbers },
        { checked: containSpecialCharacters.checked, characters: specialCharacters },
    ]

    let validCharacters = []

    characterTypes.forEach((type) => {
        if (type.checked) {
            validCharacters = validCharacters.concat(type.characters)
        }
    })

    if (validCharacters.length === 0) return ''

    let password = ''
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validCharacters.length)
        password += validCharacters[randomIndex]
    }

    return password
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const resultElement = document.getElementById('result')
    const resultArea = document.getElementById('result-area')

    const length = parseInt(passwordLengthInput.value)

    if (
        length >= 1 &&
        (containUppercaseLetters.checked ||
            containLowercaseLetters.checked ||
            containNumbers.checked ||
            containSpecialCharacters.checked)
    ) {
        resultElement.innerHTML = generatePassword(length)
        resultArea.style.display = 'flex'
    } else {
        resultElement.innerHTML = ''
        resultArea.style.display = 'none'
    }
})
