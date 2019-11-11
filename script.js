var getRandomLower = "abcdefghijklmnopqrstuvwxyz";
var getRandomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var getRandomNumber = "0123456789";
var getRandomSymbol = "!@#$%&*()";
var generateEl = document.querySelector("result");
var lengthEl = document.querySelector("length");
var upperCaseEl = document.querySelector("upperCase");
var lowerCaseEl = document.querySelector("lowercase");
var numbersEl = document.querySelector("numbers");
var symbolsEl = document.querySelector("symbols");

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener("click", () => {
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
  let generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
  var typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
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
