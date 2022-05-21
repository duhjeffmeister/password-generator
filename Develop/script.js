// Declare function for generating password
function generatePassword() {

// Declaring variables for piecing together the password
  var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
  var upperLetter = "ABCDEFGHIJKLMNOPQRSTUBWXYZ";
  var numbers = "1234567890";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var password = [];

// Inform user that they can only have a password between 8 and 128 characters with a window prompt, then ask them 
// how many they desire, then assign it to passwordLength.
  let passwordLength = prompt("Please indicate password length in between 8 and 128 characters", "");
    console.log(passwordLength);
    // Write code to address if input is not a number or is blank.
    if (passwordLength > 128 || passwordLength < 8) {
      alert("Please choose a password length between 8 and 128 characters")
    }
    else ()

// Ask user in a window if they want to user lowercase letters, uppercase letters, numbers, or special 
// characters using window.confirm.

  //Assign user input to a variable.

// Take user input variable and use it to establish password:

  // Create a string of passwordLength digits length

    // If user wants lowercase letters, generate lowercase letters by pulling out individual random digits from the string lowerLetter
      
      // Analyze the string to pull a random lower case letter out.
    
    // If user wants uppercase letters, generate uppercase letters by pulling out individual random digits from the string upperLetter
      
        // Analyze the string to pull a random upper case letter out.
    
      // If user wants numbers, generate numbers by pulling out individual random digits from the string numbers
      
        // Analyze the string to pull a random number out.
    
      // If user wants special characters, generate numbers by pulling out individual random digits from the string specialCharacters.
      
        // Analyze the string to pull a random special character out.
  
  // Combine as many of these random string digits together to make however many characters the user wants for their password length
  // and assign them to variable password.
}

// Upon button click, display the password based upon all above information
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
})