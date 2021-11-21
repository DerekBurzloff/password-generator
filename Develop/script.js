// Assignment code here
var generateBtn = document.querySelector("#generate")

// Get references to the #generate element
function generatePassword() {
  console.log("The button was clicked by user")

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvqxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()";
// User tells how many characters they want for the password length
  var length = window.prompt("How many characters will your password be? Enter a number between 8 and 128");
 // User confirms special characters, numnbers, lower case and upper case
  var uppercaseConfirm = window.confirm("Do you want uppercase characters in your password?")
  var lowercaseConfirm = window.confirm("Do you want lowercase characters in your password?")
  var numbersConfirm = window.confirm("Do you want number characters in your password?")
  var symbolsConfirm = window.confirm("Do you want symbols in your password?")

// Create a variable that gathers all characters but selects what the user wants
// Make an acceptable character list
 var specialCharacters = "" 
 if(uppercaseConfirm) {
   specialCharacters += uppercase
 }
 if(lowercaseConfirm){
   specialCharacters += lowercase
 }
 if(numbersConfirm) {
   specialCharacters += numbers
 }
 if(symbolsConfirm) {
   specialCharacters += symbols
 }
 console.log(specialCharacters)

// Randomly choose a character from the acceptable character list until I have a password that meets required length
var passwordGen = ""
for ( var i = 0; i< length; i++) {
  passwordGen += specialCharacters.charAt(Math.floor(Math.random()*specialCharacters.length));
}
console.log(passwordGen)

return passwordGen;
}

 // Password Generated
 // less that 8 or over 124
 // if no criteria is selected
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
