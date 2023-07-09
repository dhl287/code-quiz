  // 1. need to create prompts (prompt the user)
  //  a. password length (8 - 128 characters)
  //  b. lowercase, uppercase, number, symbol
  // 2. validate input, at least one character type is selected
  // 3. show generated password

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompts = createPrompts(true);
  var passwordText = document.querySelector("#password");

  if(truePrompts) {
  var password = generatePassword();
  passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}
  
function generatePassword() {
  var password = "";
  for(var i = 0; i < confirmLength; i++) {
    var randomPassword = Math.floor(Math.random() * choice.length);
    password = password + choice[randomPassword];
    console.log("The system will generate the password.")
  }
  return password;
}

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var confirmLength = "";
var choice = [];

// generate password based on prompt, created new function to create prompts

function createPrompts() {
  choice = [];
  confirmLength = parseInt(prompt("How many characters would you like to use in your password?"));

  if(confirmLength < 8 || confirmLength > 128) {
    alert("You need to add a number from 8-128.");
    console.log("Not enough characters.")
    return false;
  }

  if(confirm("Click OK if you would like to add uppercase characters.")) {
    choice = choice.concat(upperCase);
  } else {
    alert("You need to choose an uppercase character.");
    console.log("Need to add uppercase characters.")
    return false;
  }

  if(confirm("Click OK if you would like to add lowercase characters.")) {
    choice = choice.concat(lowerCase);
  } else {
    alert("You need to choose a lowercase character.");
    console.log("Need to add lowercase characters.")
    return false;
  }

  if(confirm("Click OK if you would like to add numbers.")) {
    choice = choice.concat(number);
  } else {
    alert("You need to choose a number.");
    console.log("Need to add numbers.")
    return false;
  }

  if(confirm("Click OK if you would like to add symbols.")) {
    choice = choice.concat(symbol);
  } else {
    alert("You need to choose a symbol.");
    console.log("Need to add symbols.")
    return false;
  }

return true;
}