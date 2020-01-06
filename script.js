document.addEventListener('DOMContentLoaded', function(event) {
	//variables
	var lengthPass;
	var specialChar;
	var includeNums;
	var lowerCase;
	var upperCase;

	//Array for lowercase, uppercase, symbols, numbers
	var charLower = [
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
		'z'
	];
	var charUpper = [
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
	var charNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	var stringSC = '!@#$%^&*()';
	var charSpecial = stringSC.split('');
	var charList = [];

	//Password must be between 8 and 128 characters
	do {
		var lengthPass = prompt('Please Eenter a number between 8 and 128');
		if (lengthPass > 7 && lengthPass < 129) {
			alert('You chose ' + lengthPass + ' characters.');
		} else {
			alert(
				'You must choose a password length between 8 and 128.\nPlease choose again.'
			);
		}
	} while (lengthPass < 8 || lengthPass > 128 || isNaN(lengthPass));

	do {
		alert(
			'Please choose one or more of the following to include in your password:\nSpecial characters\nNumbers\nLowercase letters\nUppercase letters'
		);
		var specialChar = confirm(
			'Would you like to include special characters in your password?'
		);
		if (specialChar) {
			alert('You chose to include special characters.');
		} else {
			alert('You chose not to include special characters.');
		}

		var includeNums = confirm(
			'Would you like to include numbers in your password?'
		);
		if (includeNums) {
			alert('You chose to include numbers.');
		} else {
			alert('You chose not to include numbers.');
		}

		var lowerCase = confirm(
			'Would you like to include lowercase letters in your password?'
		);
		if (lowerCase) {
			alert('You chose to include lowercase letters.');
		} else {
			alert('You chose not to include lowercase letters.');
		}

		var upperCase = confirm(
			'Would you like to include lowercase letters in your password?'
		);
		if (upperCase) {
			alert('You chose to include uppercase letters.');
		} else {
			alert('You chose not to include uppercase letters.');
		}
	} while (specialChar === false && includeNums === false && lowerCase === false && upperCase === false);

	if (specialChar) {
		var userSC = [charSpecial];
		console.log(userSC);
	} else {
		var userSC = [];
	}

	if (includeNums) {
		var userN = [charNums];
		console.log(userN);
	} else {
		var userN = [];
	}

	if (lowerCase) {
		var userL = [charLower];
		console.log(userL);
	} else {
		var userL = [];
	}

	if (upperCase) {
		var userU = [charUpper];
		console.log(userU);
	} else {
		var userU = [];
	}

	var charList = userSC.concat(userN, userL, userU).flat();
	console.log(charList);

	//Generate password
	var generatedPass = '';

	for (var i = 0; i < lengthPass; i++) {
		var randomIndex = Math.floor(Math.random() * charList.length);
		console.log(randomIndex);
		var random = charList[randomIndex];
		console.log(random);
		generatedPass += random;
	}

	console.log(generatedPass);

	document.getElementById('red').addEventListener('click', function() {
		console.log('you clicked button');

		document.getElementById('innerBox').innerHTML = generatedPass;
	});
	//Copy to clipboard
	document.getElementById('gray').addEventListener('click', function() {
		var text = document.getElementById('innerBox').innerText;
		var node = document.createElement('textarea');
		document.body.appendChild(node);
		node.value = text;
		node.select('');
		document.execCommand('copy');
		document.body.removeChild(node);
	});
});
