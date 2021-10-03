// Assignment Code
var generateBtn = document.querySelector("#generate");

// Empty/blank array for new password
var newPassword = [];

// Create variables for the password criteria:
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  // Password length prompt
  var passwordlengthCriteria = parseInt(prompt("Please choose a length for your password, it must be at least 8 characters and no more than 128 characters"));
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
    alert("Your new password will not contain any numbers.")
  }
  // Special Characters criteria confirmation
  var specialCharsCriteria = confirm("Would you prefer to have special characters in your new password? (e.g., !, #, $, %, etc.)")
  if (specialCharsCriteria === false) {
    alert("Your new password will not contain any special characters.")
  }
  // Adding additional question is all criteria === false
  if (lowercaseCriteria === false && uppercaseCriteria === false && numbersCriteria === false && specialCharsCriteria === false) {
    alert("Sorry! Your new password must contain one of the criterias mentioned before your it can be generated.")
  }
  // For loop for each criteria that will randomly select one of the values in each array
  for (let i = 0; i < passwordlengthCriteria; i++) {
    if (lowercaseCriteria === true) {
      var random = Math.floor(Math.random() * lowercaseAlphabet.length)
      newPassword.push(lowercaseAlphabet[random])
    }
    if (uppercaseCriteria === true) {
      var random = Math.floor(Math.random() * uppercaseAlphabet.length)
      newPassword.push(uppercaseAlphabet[random])
    }
    if (numbersCriteria === true) {
      var random = Math.floor(Math.random() * numbers.length)
      newPassword.push(numbers[random])
    }
    if (specialCharsCriteria === true) {
      var random = Math.floor(Math.random() * specialCharacters.length)
      newPassword.push(specialCharacters[random])
    }
  };
  // Generating new password and displaying in HTML
  console.log(newPassword)
  newPassword = newPassword.slice(0, passwordlengthCriteria)
  newPassword = newPassword.join("")
  document.querySelector("#password").innerHTML = newPassword
}




