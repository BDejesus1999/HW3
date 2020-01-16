
var generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);


function generatePassword() {


    var passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128"));


    var minChar = 8;
    var maxChar = 128;



    if (isNaN(passwordLength)) {

        alert("You must choose a number!");

    }



    else if (passwordLength < minChar) {

        alert("Password length must be more than 8 characters!");
        passwordLength = 0;

    }




    else if (passwordLength > maxChar) {

        alert("Password length must be less than 128 characters!");
        passwordLength = 0;


    }



    else {

        var useLowerCase = confirm("Click OK to use lowercase characters");
        var useUpperCase = confirm("Click OK to use uppercase characters");
        var useNumeric = confirm("Click OK to use numbers");
        var useSpecialChar = confirm("Click OK to use special characters");

    }


    if (useLowerCase === false && useUpperCase === false && useNumeric === false && useSpecialChar === false) {

        alert("You must choose atleast ONE type of character to use for your password!");
    }

    else {





        var charLower = "abcdefghijklmnopqrstuvwxyz";
        var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var charNum = "0123456789";
        var charSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";



        var charStr = ""
        var guaranteedChar = []



        function pushChar(x, y) {

            if (y) {

                charStr += (x);
                guaranteedChar.push(x[Math.floor(Math.random() * x.length)]);
            }
        }



        pushChar(charLower, useLowerCase);
        pushChar(charUpper, useUpperCase);
        pushChar(charNum, useNumeric);
        pushChar(charSpecial, useSpecialChar);


    }



    for (var i = 0, passwordStr = ""; i < passwordLength; i++) {

        passwordStr += charStr[Math.floor(Math.random() * charStr.length)];
    }


    var passwordArray = passwordStr.split("");

    for (var i = 0; i < guaranteedChar.length; i++) {

        passwordArray[i] = guaranteedChar[i];

    }

    var finalPassword = passwordArray.join('');

    return finalPassword;


}