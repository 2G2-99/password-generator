// Array of special characters to be included in password
var specialCharacters = [
	'@',
	'%',
	'+',
	'\\',
	'/',
	"'",
	'!',
	'#',
	'$',
	'^',
	'?',
	':',
	',',
	')',
	'(',
	'}',
	'{',
	']',
	'[',
	'~',
	'-',
	'_',
	'.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

// Function to prompt user for password options
function getPasswordOptions(checkLength, confirmTypes) {
	checkLength();
	confirmTypes(charTypes);

	return password;
}

// Function for getting a random element from an array
function getRandom(arr) {
	const random = Math.floor(Math.random() * arr.length);
	return arr[random];
}

// Function to generate password with user input
function generatePassword(arr, length, getRandom) {
	let i = 0;

	while (i < length) {
		i++;
		passwordArray.push(getRandom(arr));
	}
	return arrToStr();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var passwordText = document.querySelector('#password');

	passwordText.value = password.passwordString;
}

// Add event listener to generate button
generateBtn.addEventListener('click', summoner);

// * Code added  by me

// # Variables

// Object of types of characters
const charTypes = {
	'Special Characters': specialCharacters,
	'Numeric Characters': numericCharacters,
	'Lower Case Characters': lowerCasedCharacters,
	'Upper Case Characters': upperCasedCharacters,
};
// Prompt for length of string
let strLength;
// Empty array for characters
let charArray = [];
// Array containing the password created with the length and characters requested by the user
let passwordArray = [];
// String converted from passwordArray
let passwordString = '';
// Password Object
let password = { strLength, charArray, passwordString };

// # Functions

// Function to check the user input
function checkLength() {
	password.strLength = Number(
		prompt(
			'How many characters would you like to have on your password?',
			10
		)
	);
	if (typeof password.strLength === 'number') {
		if (password.strLength < 10) {
			alert('Your password must contain at least 10 characters');
			password.strLength = Number(
				prompt(
					'How many characters would you like to have on your password?',
					10
				)
			);
			return password.strLength;
		} else if (password.strLength > 64) {
			alert('Your password cannot contain more than 64 characters');
			password.strLength = Number(
				prompt(
					'How many characters would you like to have on your password?',
					10
				)
			);
			return password.strLength;
		} else if (password.strLength >= 10 && password.strLength <= 64) {
			return password.strLength;
		} else {
			alert('Try with a numerical input');
			password.strLength = Number(
				prompt(
					'How many characters would you like to have on your password?',
					10
				)
			);
			return password.strLength;
		}
	}
}
// Function to push characters into the array
function confirmTypes() {
	for (let type in charTypes) {
		let addType = confirm(`Would you like to include ${type}`);

		if (addType === true) {
			charArray.push(...charTypes[type]);
		}
	}
	return password['charArray'];
}
// Function to convert passwordArray to a string
function arrToStr() {
	for (let i = 0; i < passwordArray.length; i++) {
		const character = passwordArray[i];
		password.passwordString += character;
	}
	return password.passwordString;
}
// Function to call the other functions
function summoner() {
	getPasswordOptions(checkLength, confirmTypes);
	getRandom(password.charArray);
	generatePassword(password.charArray, password.strLength, getRandom);
	writePassword();
}
