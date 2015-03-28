
 /*
Larry Abril
3/14/2015
Section 00
Day 6 Validation
 */


//alert("Just testing!");

 //ask the user for a number

 var num1 =prompt("Please enter a number");

 //validate that enter a number and did not leave it blank

//validate using a while loop
 while (isNaN(num1)|| num1 === ""){
     //re-prompt the user

     if (num1 === ""){
         //the user left it blank
         num1 = prompt("Please do not leave blank.\nPlease type in a number");

     } else if (isNaN(num1)){

         num1 = prompt("Please only type numbers.\nEnter a number")
     }

 }

 //ask the user a yes or no question
 var userInput = prompt("Please enter yes or no");
 //convert to lowercase
 userInput = userInput.toLocaleLowerCase();


 //validate
 while (userInput != "yes" && userInput !="no" && userInput !="nope"){

     //re-prompt
     userInput = prompt("Please enter yes or no.");


 }
