// Assignment code here
var lowerCase;
var upperCase;
var numbers;
var special;







var strongPass = function () {
  var charachters = "";
  lowerCase = window.confirm("Are you sure you want to use lowercase?");
  if (lowerCase) {
    charachters += "abcdefghijklmnopqrstuvwxyz";
  }
  upperCase = window.confirm("Are you sure you want to use Uppercase?");
  if (upperCase) {
    charachters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  numbers = window.confirm("Are you sure you would like to use numbers?");
  if (numbers) {
    charachters += "0123456789";
  }

special = window.confirm("Are you sure you would like to use special charachters?");
  if (special) {
    charachters += "!\"#$%&()*+,-./:;<=>?@[\\]^_{|}~";
  }
  return charachters;
}
//strongPass();
// then choose the length of characthers between 8 and 128
var generatePassword = function () {
  var passwordLength = window.prompt("Please choose the length of your password?");
  while (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
    window.alert("the length of the password has to be from 8 to 128.");
    passwordLength = window.prompt("How many charachters do you want it to be?");
 }

 var charachters = strongPass();
 while (charachters === "") {
  window.alert("YOU MUST CHOOSE AT LEAST ONE!");
  charachters = strongPass();
 }
 var result = "";
 var charachtersLength = charachters.length;
 for (var i = 0; i < passwordLength; i++) {
  result += charachters.charAt(Math.floor(Math.random() * charachtersLength));
  }
  return result;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

strongPass();
generatePassword();