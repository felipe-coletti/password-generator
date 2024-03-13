const formatNumber = () => {
    number = document.getElementById("input").value.replace(/[^1-9]/g, "")

    document.getElementById("input").value = number
}

const generatePassword = () => {
    uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    specialCharacters = ["'", "\"", "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "=", "+", "`", "[", "{", "~", "^", "]", "}", "\\", "|", ",", "<", ".", ">", ";", ":", "/", "?"]

    content = [
        document.getElementById("contain-uppercase-letters").checked,
        document.getElementById("contain-lowercase-letters").checked,
        document.getElementById("contain-numbers").checked,
        document.getElementById("contain-special-characters").checked
    ]

    characterTypes = [uppercaseLetters, lowercaseLetters, numbers, specialCharacters]

    characters = []

    for (let i = 0; i < content.length; i++) {
        if (content[i] == true) {
            characters = characters.concat(characterTypes[i])
        }
    }
 
    password = ""

    for (let i = 0; i < document.getElementById("input").value; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }

    return password
}

const getPassword = () => {
    if (document.getElementById("input").value >= 1){
        if (document.getElementById("contain-uppercase-letters").checked == true || document.getElementById("contain-lowercase-letters").checked == true || document.getElementById("contain-numbers").checked == true || document.getElementById("contain-special-characters").checked == true) {
            document.getElementById("result").innerHTML = generatePassword()
            document.getElementById("result-area").style.display = "flex";
        } else {
            document.getElementById("result-area").style.display = "none";
        }
    } else {
        document.getElementById("result-area").style.display = "none";
    }
}
