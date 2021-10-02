// Assignment Code
var generateBtn = document.querySelector("#generate");

// Empty/blank array for new password
var password = [];

// Create variables for the password criteria:
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  // Password length prompt
  var passwordlengthCriteria = prompt("Pleae choose a length for your password, it must be at least 8 characters and no more than 128 characters");
  if (passwordlengthCriteria > 128 || passwordlengthCriteria < 8) {
    passwordlengthCriteria = alert("That number does not meet the length criteria, please select a number in between 8 and 128.");
    return
  }
  // Lowercase criteria confirmation
  var lowercaseCriteria = confirm("Would you prefer lowercase letters in your new password?");
  if (lowercaseCriteria === false) {
    alert("Your new password will not contain any lowercase letters.")
  }
  // Uppercase criteria confirmation
  var uppercaseCriteria = confirm("Would you prefer uppercase letters in your new password?");
  if (uppercaseCriteria === false) {
    alert("Your new password will not contain any uppercase letters.")
  }
  // Numbers criteria confirmation
  var numbersCriteria = confirm("Would you prefer to have numbers in your password?")
  if (numbersCriteria === false) {
    alert("Your new password will not contian any numbers.")
  }
  // Special Characters criteria confirmation
  var specialCharsCriteria = confirm("Would you prefer to have special characters in your new password? (e.g., !, #, $, %, etc.")
  if (specialCharsCriteria === false) {

  }


  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // Not using started code password variable
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}


