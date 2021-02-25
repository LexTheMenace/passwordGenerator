// Assignment Code
const generateBtn = document.querySelector("#generate");

//Theme button
const themeBtn = document.getElementById('theme');

// change color function 

const themeChange = () => {
const newColor = themeBtn.value;
console.log(newColor);
  document.querySelector(':root').style.setProperty('--color', newColor);
}

// change text color function
  var textColorOptions = document.textColorForm.textColor;
  console.log(textColorOptions);
  var prev = null;
  for(var i = 0; i < textColorOptions.length; i++) {
     textColorOptions[i].onclick = function () {
          (prev) ? console.log(prev.value) : null;
          if(this !== prev) {
              prev = this;
          }
          document.querySelector(':root').style.setProperty('--textColor', this.value);

      };
  };

// Theme event listener
themeBtn.addEventListener('change', () => themeChange());

// Write password to the #password input
function writePassword() {
  // How long? 
  const passLength = parseInt(document.getElementById('charcount').value);

  if (passLength > 7 && passLength < 129) {

    //Prompt for password criteria
    const lowerCase = document.getElementById('lowercase').checked;
    const upperCase = document.getElementById('uppercase').checked;
    const numChar = document.getElementById('numbers').checked;
    const specialChar = document.getElementById('special').checked;

    const possibleChar = [];

    if (lowerCase) {
      possibleChar.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    };

    if (upperCase) {
      possibleChar.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    };

    if (numChar) {

      for (var i = 0; i < 10; i++) {
        possibleChar.push(i);
      }
    };

    if (specialChar) {
      possibleChar.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=")
    };

    //Alert div
    const alert = document.getElementById('alert');

    //if User selects none
    if (lowerCase === false && upperCase === false && numChar === false && specialChar === false) {
      alert.style.display = 'flex';
      setTimeout(() => alert.style.display = 'none', 2500);
    }
    else {
      var password = "";

      for (var i = 0; i < passLength; i++) {

        var position = Math.floor(Math.random() * possibleChar.length);
        password = password + possibleChar[position];

        const passwordText = document.querySelector("#password");
        passwordText.value = password;
        document.getElementById('results').style.display = 'block'
      }
    }
  }
  else {
    alert("Password must be between 8 and 128 chars.")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 //var password = generatePassword();