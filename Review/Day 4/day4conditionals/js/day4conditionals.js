
 /*
Larry Abril
3/10/2015
Section 00
Day 4 Conditionals
 */


//alert("Just testing!");


 //Basic Conditional.
 /*
 if (conditional to test){
 code to run if the condition is true
 }
  */

 //Create a boolean variable
 var oldEnough = false;

 //If the kid is old enough, he can ride the ride
 if(oldEnough){
     //Code to run if the kid is old enough.
     console.log("The kid is old enough to ride the roller coaster.");
 } else {
     //Code to run if the kid is not old enough
     console.log("Sorry you are to young.");
 }

 // Relational Operator

 //If a kid is over 48 inches tall, them he can ride the coaster

 var kidHeight = prompt("How tall is the kid in inches?");
 //validation
 while (kidHeight === "" || isNaN(kidHeight)){
     //re-prompt the user to make sure its not blank and its a number
     kidHeight = prompt("Please do not leave blank and only use numbers.\nHow tall is the kid in inches?");
 }

 //parseInt
 kidHeight = parseInt(kidHeight);

 //create a variable for min height requirements

 var minHeight = prompt("What is the requirements in inches for a kid to ride?");
 //validation
 while (minHeight === "" || isNaN(minHeight)){
     //re-prompt the user to make sure its not blank and its a number
     minHeight = prompt("Please do not leave blank and only use numbers.\nWhat is the requirements in inches?");
 }

 //parseInt
 minHeight = parseInt(minHeight);

 //create a variable for sneaker lifts

 var sneakerLifts = prompt("How much does the sneaker help?\nEnter how many inches more.");
 //validation
 while (sneakerLifts === "" || isNaN(sneakerLifts)){
     //re-prompt the user to make sure its not blank and its a number
     sneakerLifts = prompt("Please do not leave blank and only use numbers.\nEnter how many inches more.");
 }

 //parseInt
 sneakerLifts = parseInt(sneakerLifts);


 //test the kid height

 if(kidHeight > minHeight){
     console.log("Kid is taller enough to ride the coaster!");
 } else if(kidHeight + sneakerLifts > minHeight){
     console.log("If you use enough napkins, you can ride the ride!");
 } else {
     console.log("Sorry you are to short!");
 }