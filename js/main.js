import { generatePassword } from './password.js'

const passwordLengthInput = document.getElementById('input')
const form = document.getElementById('form')
const resultElement = document.getElementById('result')
const resultArea = document.getElementById('result-area')

const containUppercaseLetters = document.getElementById('contain-uppercase-letters')
const containLowercaseLetters = document.getElementById('contain-lowercase-letters')
const containNumbers = document.getElementById('contain-numbers')
const containSpecialCharacters = document.getElementById('contain-special-characters')

passwordLengthInput.addEventListener('keyup', () => {
	passwordLengthInput.value = passwordLengthInput.value.replace(/\D/g, '')
})

form.addEventListener('submit', e => {
	e.preventDefault()

	const length = parseInt(passwordLengthInput.value)

	const options = {
		uppercase: containUppercaseLetters.checked,
		lowercase: containLowercaseLetters.checked,
		numbers: containNumbers.checked,
		special: containSpecialCharacters.checked
	}

	if (length >= 1 && Object.values(options).some(v => v)) {
		const password = generatePassword(length, options)

		resultElement.innerHTML = password
		resultArea.style.display = 'flex'
	} else {
		resultElement.innerHTML = ''
		resultArea.style.display = 'none'
	}
})
