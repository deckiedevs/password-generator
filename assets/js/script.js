// Assignment code here
var charSelect = function() {

  // include lowercase characters
  var charLower = confirm('Would you like to include lowercase characters?');
  
  if (!charLower) {
    charLower = "";
  }               
  else {
    charLower = "abcdefghijklmnopqrstuvwxyz";
  }

  // include uppercase characters
  var charUpper = confirm('Would you like to include uppercase characters?');

  if (!charUpper) {
    charUpper = "";
  }
  else {
    charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // include numeric characters
  var charNum = confirm('Would you like to include numbers?');

  if (!charNum) {
    charNum = "";
  }
  else {
    charNum = "0123456789";
  }

  // include special characters
  var charSpec = confirm('Would you like to include special characters?');

  if (!charSpec) {
    charSpec = "";
  }
  else {
    charSpec = "!@#$%&*+";
  }

  // validates that at least one character type is selected
  if (!charLower && !charUpper && !charNum && !charSpec) {
    window.alert("Please choose at least one type of character.");
    charSelect();
  }
  else {
    // concatenates the selected character types
    var charString = charLower + charUpper + charNum + charSpec
  }
  
  console.log("Character set is " + charString);

  return charString
}

var generatePassword = function() {
  
  // setting character length
  var charLength = prompt('How long would you like your password to be?  Please enter a number between "8" and "128".');
  charLength = parseInt(charLength);
  console.log('Character length is ' + charLength);
  
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    return generatePassword();
  }

  // generates password based on selected criteria
  var charSet = charSelect();
  var retPassword = "";
  
  for (var i = 0, n = charSet.length; i < charLength; i++) {
    retPassword += charSet.charAt(Math.floor(Math.random() * n));
  }
  console.log("Generated password is " + retPassword);
  
  return retPassword;
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