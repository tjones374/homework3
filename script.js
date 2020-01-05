var length = prompt('How long do you want your password to be?');
console.log(length);
var lowerCase = confirm('Do you want to include lowercase letters?');
console.log(lowerCase);
var upperCase = confirm('Do you want to include uppercase letters?');
console.log(upperCase);
var numbers = confirm('Do you want to include numbers?');
console.log(numbers);
var symbols = confirm('Do you want to include symbols?');
console.log(symbols);

var getRandomLower = [
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
	'x',
	'y',
	'z'
];
console.log(getRandomLower);

var getRandomUpper = [
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
	'Z'
];
console.log(getRandomUpper);

var getRandomNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
console.log(getRandomNumber);

var getRandomSymbol = ['!', '@', '#', '$', '%', '&', '*'];
console.log(getRandomSymbol);
10;

var requestedCharacters = [];
if (lowerCase === true) {
}
var generateEl = document.querySelector('result');
var lengthEl = document.querySelector('length');
var upperCaseEl = document.querySelector('upperCase');
var lowerCaseEl = document.querySelector('lowercase');
var numbersEl = document.querySelector('numbers');
var symbolsEl = document.querySelector('symbols');

var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
	var length = +lengthEl.value;
	var hasLower = lowerCaseEl.checked;
	var hasUpper = upperCaseEl.checked;
	var hasNumber = numberEl.checked;
	var hasSymbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
	var typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		(item) => Object.values(item)[0]
	);

	if (typesCount === 0) {
		return '';
	}

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			var funcName = Object.keys(type)[0];
			console.log(funcName);

			generatedPassword += randomFunc[funcName]();
		});
	}
	var finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
}
console.log(finalPassword);
function getRandomLower() {
	return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUpperCase() {
	return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomNumbers() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbols() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}
