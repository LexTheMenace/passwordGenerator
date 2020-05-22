// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
// How long? 
var passLength = prompt("Pick a password length. (Between 8 and 128.)")

if (passLength > 7 && passLength < 129) { 
  //Prompt for password criteria
var lowerCase = confirm("Include lowercase letters?")
var upperCase = confirm("Include uppercase letters?")
var numChar = confirm("Include numbers?")
var specialChar = confirm("Include special characters?")
 
          if (lowerCase === false && upperCase === false && numChar === false && specialChar === false){
              alert("You must choose at least one!")
          }
          else {
            console.log("sucess")
          }
}}