// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables used
var lengthOfStringFromUserImput = 0;
var usingNumbers = false;
var usingUpper = false;
var usingLower = false;
var usingSymbols = false;
var numberOfConfirms = 0;

var functionArray = [];

// loop for number prompt
function howLong(){
    var length= prompt("How many characters?");
    if (isNaN(length) || length < 8 || length > 128){
        alert("There is a minimum of 8 characters and a maximum of 128 characters.");
        howLong();
    }
    else {
        lengthOfStringFromUserImput=length;
    }
}


//use of prompts
function promptMe(){

    numberOfConfirms = 0;

    howLong();

    usingNumber= confirm("Would you like Numbers?")

    usingUpper= confirm("Would you like uppercase letters?");

    usingLower= confirm("Would you like lowercase letters?");

    usingSymbols= confirm("Would you like symbols?");


//what occurs on confirms
    if (usingNumber){
        functionArray.push[getRandomNumber];
        numberOfConfirms++;
    }

    if (usingUpper){
        functionArray.push[getRandomUpper];
        numberOfConfirms++;
    }

    if (usingLower){
        functionArray.push[getRandomLower];
        numberOfConfirms++;
    }

    if (usingSymbols){
        functionArray.push[getRandomSymbol];
        numberOfConfirms++;
    }

//Need confirms to be more than 0
    if (numberOfConfirms == 0){
        promptMe();
    }
}


//to generate random characters
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symobls = '"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//unsure if this generates a passsword
function generatePassword() {

    var thePassword = "";
    for (var i = 0; i < lengthOfStringFromUserImput; i++){
        var randomVariable= Math.floor(Math.random() * functionArray.length);
        thePassword= functionArray[randomVariable];
    }   

console.log(functionArray.length);

    return thePassword;
}


//given code
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);