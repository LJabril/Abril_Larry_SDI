
 /*
Larry Abril
3/24/2015
Section 00
Day 8 Anon
 */


//alert("Just testing!");

 //Basic Function
 /*
 function functionName (){

 }


 //ANONYMOUS Function
 var functionName = function(){

 }
  */

 //Anon function are extremely popular in JS and JQuery
 //Highly used in Object Object Oriented Programing
 //Quickly and Easy
 //You can use either a basic or anon-For Now

 //function call above the definition
 var basicArea2 = triangleArea(2,9);
 console.log("The area from the basic function before the definition is "+basicArea2+".");
/*
This does not work!!!

 //Anon
 var anonArea2 = triangleAreaAnon(3,4);
 console.log("The area from the anon function before the definition is " +anonArea2+".");
 */

 //Build  a function function for area of a triangle

 function triangleArea (b, h) {
     //Calc the area
     var  area = .5*b*h;
     return area;
 }

 // Anon function

 var triangleAreaAnon = function (b,h){
     var area = .5*b*h;
     return area;

 }

 //function call to basic function
 var basicArea= triangleArea(5,6);
 console.log("The area for the basic function " +basicArea+ ".");

 //function call to the Anon function
 var anonArea = triangleAreaAnon(4,5);
 console.log("The area from the Anon function is "+anonArea+ ".");