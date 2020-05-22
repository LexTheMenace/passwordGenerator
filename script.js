// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
// How long? 
var passLength = prompt("Pick a password length. (Between 8 and 128 characters.)")

if (passLength > 7 && passLength < 129) { 
 
  //Prompt for password criteria
var lowerCase = confirm("Include lowercase letters?")
var upperCase = confirm("Include uppercase letters?")
var numChar = confirm("Include numbers?")
var specialChar = confirm("Include special characters?")

var possibleChar = [];

        if(lowerCase) {
            possibleChar.push("a","b","c","d","e","f","g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
           }
        if (upperCase) {
            possibleChar.push("A","B","C","D","E","F","G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
            }
        if(numChar) {
      
          for (var i = 0; i < 10; i++) {
            possibleChar.push(i);
               } }

        if(specialChar) {
             possibleChar.push("!", "@", "#", "$", "%", "^", "&",  "*", "(", ")", "-", "_", "=")
                      }

            

 //if User selects none
          if (lowerCase === false && upperCase === false && numChar === false && specialChar === false){
              alert("You must choose at least one!")
          }
          else {    

            var password = "";

            for (var i = 0; i < passLength; i++) {
             
              var position = Math.floor(Math.random() * possibleChar.length)
              password =password + possibleChar[position];

              var passwordText = document.querySelector("#password");         
              passwordText.value = password  
            }}}       
else {
alert("Password must be between 8 and 128 chars.")
}        
} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 //var password = generatePassword();

