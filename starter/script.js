/**
 * PSEUDOCODE
  - Create a function where a prompt gets a numeric input specifying how many characters the users want in their password (no less than 10 and no more than 64)

    On that same function there should be multiple confirms, where the users decide what character type they want to include.

  - With the validated character types (minimum one) generate a random string (It may begin as an array but then it gets concatenated)

  - When the password has been generated, then it has to be displayed on the webpage
 */

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
	let strLength = Number(
		prompt(
			'How many characters would you like to have on your password?',
			10
		)
	);
	return checkLength(strLength);
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Added code by me

// Object of types of characters
const charTypes = {
	// specialCharacters: specialCharacters,
	// numericCharacters: numericCharacters,
	// lowerCasedCharacters: lowerCasedCharacters,
	// upperCasedCharacters: upperCasedCharacters,

	'Special Characters': specialCharacters,
	'Numeric Characters': numericCharacters,
	'Lower Case Characters': lowerCasedCharacters,
	'Upper Case Characters': upperCasedCharacters,
};

let charArray = [];

// Function to check the user input
function checkLength(strLength) {
	if (typeof strLength === 'number') {
		if (strLength < 10) {
			alert('Your password must contain at least 10 characters');
			strLength = Number(
				prompt(
					'How many characters would you like to have on your password?',
					10
				)
			);
			return strLength;
		} else if (strLength > 64) {
			alert('Your password cannot contain more than 64 characters');
			strLength = Number(
				prompt(
					'How many characters would you like to have on your password?',
					10
				)
			);
			return strLength;
		} else if (strLength >= 10 && strLength <= 64) {
			return strLength;
		} else {
			alert('Try with a numerical input');
			strLength = Number(
				prompt(
					'How many characters would you like to have on your password?',
					10
				)
			);
			return strLength;
		}
	}
}

function confirmTypes(charTypes) {
	for (let type in charTypes) {
		let addType = confirm(`Would you like to include ${type}`);

		if (addType === true) {
			charArray.push(charTypes[type]);
		}
	}
	return charArray;
}

// ?  Testing area

// ?
