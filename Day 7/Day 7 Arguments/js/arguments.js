
 /*
Larry Abril
3/17/2015
Section 00
Day 7 Arguments
 */


//alert("Just testing!");
//arguments  = goes into the functions
 //parameters = catch the arguments and in the function definition

 //create a function that calc the area of a rectangle..... AGAIN!
//add in parameters

 function calcArea(w, h){
     //var width =10;
     //var height = 20;
     var area= w * h;
     console.log("The area is "+ area);
 }
 //call our function
 //add arguments to the function call

 calcArea(10,20);
 calcArea(20,40);

 //prompt the user for width and height
 var width = prompt("Enter a width");
 //ENTER VALIDATION

 var height = prompt("Enter a height");
 calcArea(width,height);

 //dog years
 function dogYears (humanAge){
     //dog years = human years * seven ;

     var dogAge = humanAge*7;
     console.log("Your age in dog years is "+ dogAge);

 }
//call the dog function
 dogYears(4);

 //prompt user for human age
 var userInput = "Please enter your human age";

 //call the dog function
 dogYears(userInput);