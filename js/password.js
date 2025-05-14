export const generatePassword = (length, options) => {
	const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
	const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
	const numbers = '0123456789'.split('')
	const specialCharacters = `'"!@#$%&*()-_=+\`[{\~^]}\\|,<.>;:/?`.split('')

	const characterTypes = [
		{ include: options.uppercase, characters: uppercaseLetters },
		{ include: options.lowercase, characters: lowercaseLetters },
		{ include: options.numbers, characters: numbers },
		{ include: options.special, characters: specialCharacters }
	]

	let validCharacters = characterTypes.filter(type => type.include).flatMap(type => type.characters)

	if (validCharacters.length === 0) return ''

	let password = ''

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * validCharacters.length)
		password += validCharacters[randomIndex]
	}

	return password
}
