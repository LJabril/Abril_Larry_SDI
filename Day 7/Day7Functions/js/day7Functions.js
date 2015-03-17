
 /*
Larry Abril
3/17/2015
Section 00
Day 7 Functions
 */

//function call the printHello before it is defined in our code
 printHello();
calcArea();

//alert("Just testing!");


 //The basic function of a function
 //function functionName () {code to run}

 //create a function hat will console log out hello
 function printHello (){

     console.log("Hello and Howdy!");
 }

 //create a function
 function printMore(){
     console.log("Print more text!");
 }

 // Function call the printHello function

 // functionName ();
 printHello();
 printMore();
 printHello();


 //function to call printMore
 printMore();


 //create a function that calculate the area of a rectangle

 function calcArea(){

     //create variable for width, height and area
     var width =20;
     var height = 30;
     var area = width*height;

     //print out the area
     console.log("The area is " + area);

 }

 //create a function that prints the area
 calcArea();