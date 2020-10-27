// Assignment code here
var generatePassword = function() {
  
  // setting character length
  var charLength = window.prompt('How long would you like your password to be?  Please enter a number between "8" and "128".');

  if (charLength < 8 || charLength > 128) {
    window.alert("Please select a value between 8 and 128.");
    generatePassword();
  }
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
