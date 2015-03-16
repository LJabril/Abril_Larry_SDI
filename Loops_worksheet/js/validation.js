
 /*
Larry Abril
3/14/2015
Section 00
Loops worksheet (Validation)
 */


alert("Just testing!");

 //Validating prompts Using Loops 1 text and 1 number
 // create prompt

 alert("I need to know how many people are in the room for safety reason");

 var peopleAmount =prompt("Please enter a number");
 var roomCapacity = 60;


 //validate that user enter a number

 //validating using a while loop
 while (isNaN(peopleAmount)|| peopleAmount === ""){
//re-prompt the user
     if (peopleAmount === ""){
//the user left it blank
         peopleAmount = prompt("Please do not leave blank.\nPlease type in a number");
     } else if (isNaN(peopleAmount)){
         peopleAmount = prompt("Please only type numbers.\nEnter a number")
     }
 }
 if (peopleAmount <= roomCapacity){
     console.log("It is safe for the people to stay in the room.");
 } else if (peopleAmount > roomCapacity){
     console.log("It is a safety issue. The Capacity is 60 people per room\nEvery body out of the room!" );
 }

