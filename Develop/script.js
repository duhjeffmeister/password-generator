// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Generate lowercase letters; pulls from character set in UTF-8 pertaining to lowercase letters 97
// through 122.
function lowerCaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// Tests to make sure it generates a good CharCode number to plug back into function:
// console.log(Math.floor(Math.random() * 26) + 97);
// Test to make sure function is outputting a lowercase letter:
// console.log(lowerCaseLetter());

// Generate uppercase letters; pulls from character set in UTF-8 pertaining to uppercase letters 65
// through 90.
function upperCaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// Generate numbers; pulls from character set in UTF-8 pertaining to numbers 48 through 57.
function passwordNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// Generate special characters; pulls from character set in UTF-8 pertaining to special characters
// 33 through 47
function specialCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
