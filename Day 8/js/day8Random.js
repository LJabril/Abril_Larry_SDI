
 /*
Larry Abril
3/24/2015
Section 00
Day 8 Random
 */


//alert("Just testing!");

 //create a function that will give us a random integer between two values.

 // create variables for min and max value
 var min = prompt("Let's find a random number between two numbers.\nPlease enter your min value:");

 //validate min value
 while (isNaN(min) || min === ""){
     //Re-prompt the user
     min = prompt("Please do not leave blank and only use numbers.\nWhat is the min value.");
 }

 var max = prompt("Please enter your max value:");

 //validate min value
 while (isNaN(max) || max === "" || parseInt(max) <= parseInt(min)){

     if (isNaN(max)){
         //Re-prompt the user
         max = prompt("Please only use numbers");
     } else if ( max === "Please do not leave blank and only use numbers.\nWhat is the max value."){

     } else if ( parseInt(max)<= parseInt(min) ){
         max = prompt("Please enter a higher number.");
     }



 }



 //function call

 var ranNum = getRandom (min,max);
 console.log("Your random number between " + min+ " and " + max + " is " + ranNum + ".");

 // create a function
 function getRandom(min,max) {

     //generate a random integer
     var randomNumber = Math.round(Math.random()*(max-min)+ parseInt(min));

     return randomNumber;

 }

 //15 random number - console.log();

 for (var i =0; i<15; i++){
     //this will give the same number 15 times
     //console.log(ranNum);

     console.log(getRandom(min, max));
 }
