
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

 var areaCode = 407;
 var prefix = 555;
 var lineNumber = 1234;

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
 var tshirtBought = prompt("How many tshirts did you buy today?");

 //calculate the total tshirts
 var totalTshirts = parseInt(tshirtsOwned) + parseInt(tshirtBought);
 console.log("You currently own " + totalTshirts + " tshirts.");



