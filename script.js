// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdeefghijklmnopqrstuzwxyz";
var numChar = "0123456789"
var specChar = "!@#$%^&*()_-=+?<>~";

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
 //if User selects none
          if (lowerCase === false && upperCase === false && numChar === false && specialChar === false){
              alert("You must choose at least one!")
          }
          else {    
            var possibleChar = [];

                      if(lowerCase) {
                        possibleChar.push(letters.split(""));
                      }
                      if (upperCase) {
                        possibleChar.push(letters.toUpperCase().split(""))
                      }
                      if(numChar) {
                        possibleChar.push(numChar.split(""))
                      }
                      if(specialChar) {
                        possibleChar.push(specChar.split(""))
                      }


            for (var i = 0; i < passLength; possibleChar++) {
              password = password + possibleChar;
         

              console.log(password);
            }
          }
          }       
else {
alert("Password must be between 8 and 128 chars.")
}        
        } 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/* var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password */ 