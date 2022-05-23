// Assignment code here
var infoCenter = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUBWXYZ",
  allNumbers: "1234567890",
  specialCharacters: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
} 
// Create password
function generatePassword() {
var userInput = prompt("Please indicate password length in between 8 and 128 characters");
var password = "";
var passwordWordbox = "";

// If user inputs a valid character count, ask what they want in the password
if (userInput <= 128 && 8 <= userInput) {
  lowerCase = confirm("Click OK if you want lower case letters in your password.");
  upperCase = confirm("Click OK if you want upper case letters in your password.");
  allNumbers = confirm("Click OK if you want numbers in your password.");
  specialCharacters = confirm("Click OK if you want special characters in your password.");

  if (lowerCase === false && upperCase === false && allNumbers === false && specialCharacters === false) {
    alert("Please confirm one or more character types for your password.");
  }

  if (upperCase) {
    passwordWordbox += infoCenter.upperCase;
  }

  if (lowerCase) {
    passwordWordbox += infoCenter.lowerCase;
  }

  if (allNumbers) {
    passwordWordbox += infoCenter.allNumbers;
  }

  if (specialCharacters) {
    passwordWordbox += infoCenter.specialCharacters;
  }

  // Create password with random string elements from the master password string
  for (let i = 0; i < userInput; i++) {
    password += passwordWordbox[Math.floor(Math.random() * passwordWordbox.length)];
  }
  
  // Print password for user
  return password;
}

else if (userInput < 8 || userInput > 128) {
  alert("Please enter a character count of 8 and 128 for your password.");

  document.getElementById("password").innerHTML = restart("Please restart by clicking Generate Password");
  function restart(message) {
    return message;
  }
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
