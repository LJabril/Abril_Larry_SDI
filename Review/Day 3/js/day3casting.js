
 /*
Larry Abril
3/7/2015
Section 00
Day 3 Casting
 */


//alert("Just testing!");

 //Casting variable means treating one database like another....... if possible
 var stringVar = "6";
 var result = 7 + stringVar;
 console.log(result);

// Number() = treats whatever is inside like a number if possible.
 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);


 // Cast numbers to be a text string
 //String() = treat whatever is inside as a text string

 var areaCode = prompt("Write your area code");
 //validation
 while (areaCode === "" || isNaN(areaCode)){
     //re-prompt the user to make sure its not blank and its a number
     areaCode = prompt("Please do not leave blank and only use numbers.\nWrite your area code");
 }

 //parseInt
 areaCode = parseInt(areaCode);


 var prefix = prompt("Write your prefix");
 //validation
 while (prefix === "" || isNaN(prefix)){
     //re-prompt the user to make sure its not blank and its a number
     prefix = prompt("Please do not leave blank and only use numbers.\nWrite your prefix");
 }

 //parseInt
 prefix = parseInt(prefix);



 var lineNumber = prompt("Write your lineNumber");
 //validation
 while (lineNumber === "" || isNaN(lineNumber)){
     //re-prompt the user to make sure its not blank and its a number
     lineNumber = prompt("Please do not leave blank and only use numbers.\nWrite your lineNumber");
 }

 //parseInt
 lineNumber = parseInt(lineNumber);


 var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);
 console.log(phoneNumber);

 console.log("(" + areaCode+ ")"+prefix+"-" + lineNumber);

 //Parsing Integers
 //parseInt() = looks trough a text string and returns an integers.
 //Only the first in the string is returned!
 //If the first character in the text string cannot be converted in to a number then it returns NaN = Not a Number

 var a = parseInt("40 years old");
 console.log(a);

 var b = Number("40 Years old");
 console.log(b);

 var c = parseInt("He was 40.");
 console.log(c);

 //Prompts ONLY return text string!!!!
 var tshirtsOwned = prompt("How many tshirts do you currently own?");
 while (tshirtsOwned === "" || isNaN(tshirtsOwned)) {
     //re-prompt the user to make sure its not blank and its a number
     tshirtsOwned = prompt("Please do not leave blank and only use numbers.\nHow many tshirts do you currently own?");
 }
 var tshirtBought = prompt("How many tshirts did you buy today?");
     while (tshirtBought === "" || isNaN(tshirtBought)) {
         //re-prompt the user to make sure its not blank and its a number
         tshirtBought = prompt("Please do not leave blank and only use numbers.\nHow many tshirts do you currently own?");
     }
 //calculate the total tshirts
 var totalTshirts = parseInt(tshirtsOwned) + parseInt(tshirtBought);
 console.log("You currently own " + totalTshirts + " tshirts.");



