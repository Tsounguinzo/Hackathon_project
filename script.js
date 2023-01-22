window.onload = function() {
  function checkPasswordStrength(password) {
    // Define regular expressions for different types of characters
    var lowercaseRegex = /[a-z]/g;
    var uppercaseRegex = /[A-Z]/g;
    var numberRegex = /[0-9]/g;
    var specialRegex = /[!@#$%^&*]/g;
  
    // Count the number of each type of character in the password
    var lowercaseCount = (password.match(lowercaseRegex) || []).length;
    var uppercaseCount = (password.match(uppercaseRegex) || []).length;
    var numberCount = (password.match(numberRegex) || []).length;
    var specialCount = (password.match(specialRegex) || []).length;
  
    // Add up the total number of characters
    var totalCount = lowercaseCount + uppercaseCount + numberCount + specialCount;
  
    // Determine the strength of the password based on the number of each type of character
    var strength = "";
    if (totalCount < 8) {
      strength = "Very Weak";
    } else if (totalCount >= 8 && totalCount < 12) {
      strength = "Weak";
    } else if (totalCount >= 12 && totalCount < 16) {
      strength = "Moderate";
    } else {
      strength = "Strong";
    }
  
    return strength;
  }

  function estimateCrackingTime(password) {
    // Define the number of guesses per second that a computer can make
    var guessesPerSecond = 1000000000;
  
    // Define the possible characters that can be in a password
    var possibleCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  
    // Calculate the number of possible combinations for the given password length
    var possibleCombinations = Math.pow(possibleCharacters.length, password.length);
  
    // Calculate the estimated time to crack the password in seconds
    var crackingTimeSeconds = possibleCombinations / guessesPerSecond;
  
    // Convert seconds to days, hours, minutes, and seconds
    var crackingTimeDays = Math.floor(crackingTimeSeconds / 86400);
    var crackingTimeHours = Math.floor((crackingTimeSeconds % 86400) / 3600);
    var crackingTimeMinutes = Math.floor(((crackingTimeSeconds % 86400) % 3600) / 60);
    var crackingTimeSeconds = Math.floor(((crackingTimeSeconds % 86400) % 3600) % 60);
  
    // Return the estimated cracking time in a human-readable format
    return crackingTimeDays + " days, " + crackingTimeHours + " hours, " + crackingTimeMinutes + " minutes, " + crackingTimeSeconds + " seconds";
  }


  function generatePassword(includeNumbers, includeSymbols, includeUppercase, passwordLength) {
    // Define the possible characters that can be in a password
    var possibleCharacters = "abcdefghijklmnopqrstuvwxyz";
    
    // Add numbers to possible characters if includeNumbers is true
    if (includeNumbers) {
      possibleCharacters += "0123456789";
    }
    
    // Add symbols to possible characters if includeSymbols is true
    if (includeSymbols) {
      possibleCharacters += "!@#$%^&*";
    }
    
    // Add uppercase letters to possible characters if includeUppercase is true
    if (includeUppercase) {
      possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    // Initialize an empty string to store the generated password
    var generatedPassword = "";
    
    // Use a for loop to generate a random character from possibleCharacters for each character in the password
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      var randomCharacter = possibleCharacters[randomIndex];
      generatedPassword += randomCharacter;
    }
    
    // Return the generated password
    return generatedPassword;
  }

  // Password Strength
document.querySelector("#rate-password-btn").addEventListener("click", function() {
  var password = document.querySelector("#password").value;
  var strength = checkPasswordStrength(password);
  document.querySelector("#password-strength").value = strength;
  var crackingTime = estimateCrackingTime(password);
  document.querySelector("#cracking-time").value = crackingTime;
});

// Generated Password
document.querySelector("#generate-password-btn").addEventListener("click", function() {
  var includeNumbers = document.querySelector("#include-numbers").checked;
  var includeSymbols = document.querySelector("#include-symbols").checked;
  var includeUppercase = document.querySelector("#include-uppercase").checked;
  var passwordLength = document.querySelector("#password-length").value;
  var generatedPassword = generatePassword(includeNumbers, includeSymbols, includeUppercase, passwordLength);
  document.querySelector("#generated-password").value = generatedPassword;
});

function generatePassword(){
  var includeNumbers = document.querySelector("#include-numbers").checked;
  var includeSymbols = document.querySelector("#include-symbols").checked;
  var includeUppercase = document.querySelector("#include-uppercase").checked;
  var passwordLength = document.querySelector("#password-length").value;
  var characters = "abcdefghijklmnopqrstuvwxyz";
  if(includeNumbers){
    characters += "0123456789";
  }
  if(includeSymbols){
    characters += "!@#$%^&*()_+";
  }
  if(includeUppercase){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  var generatedPassword = "";
  for(var i = 0; i < passwordLength; i++){
    generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return generatedPassword;
}


document.querySelector("#rate-password-btn").addEventListener("click", function() {
  var password = document.querySelector("#password").value;
  var strength = checkPasswordStrength(password);
  var crackingTime = estimateCrackingTime(password);
  document.querySelector("#password-strength").value = strength;
  document.querySelector("#cracking-time").value = crackingTime;
});
}