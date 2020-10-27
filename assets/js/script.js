// Assignment code here
var generatePassword = function() {
  
  // setting character length
  var charLength = window.prompt('How long would you like your password to be?  Please enter a number between "8" and "128".');

  if (charLength < 8 || charLength > 128) {
    window.alert("Please select a value between 8 and 128.");
    generatePassword();
  }

  var charSelect = function() {

    // include lowercase characters
    var charLower = window.prompt('Would you like to include lowercase characters?  Please enter "yes" or "no".');
    
    charLower = charLower.toLowerCase();

    if (charLower === "no" || charLower === "n") {
      charLower = "";
    }
    else {
      charLower = "abcdefghijklmnopqrstuvwxyz";
    }
  
    // include uppercase characters
    var charUpper = window.prompt('Would you like to include uppercase characters?  Please enter "yes" or "no".');

    charUpper = charUpper.toLowerCase();
  
    if (charUpper === "no" || charUpper === "n") {
      charUpper = "";
    }
    else {
      charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  
    // include numeric characters
    var charNum = window.prompt('Would you like to include numbers?  Please enter "yes" or "no".');
    
    charNum = charNum.toLowerCase();

    if (charNum === "no" || charNum === "n") {
      charNum = "";
    }
    else {
      charNum = "0123456789";
    }
  
    // include special characters
    var charSpec = window.prompt('Would you like to include special characters?  Please enter "yes" or "no".');

    charSpec = charSpec.toLowerCase();

    if (charSpec === "no" || charSpec === "n") {
      charSpec = "";
    }
    else {
      charSpec = "!@#$%&*+";
    }
  }

  charSelect();
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