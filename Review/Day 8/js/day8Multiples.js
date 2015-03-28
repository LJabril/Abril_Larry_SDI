
 /*
Larry Abril
3/24/2015
Section 00
Day 8 Multiples
 */


//alert("Just testing!");


 //create multiples function using information from the user

 //calc the perimeter and area of a rectangle

 function periRect (w,h){
     //perimeter = 2*w + 2*h
     var p = 2*w +2*h;
     return p;
 }

 //create a anon function for the area
 var areaRect = function (w,h){
     var area = w*h;
     return area;
 };


//prompt the user for width and height
 var width = prompt("Let's figure out the perimeter and area of the rectangle.\nWhat is the width:");

 //validation
 while (width === "" || isNaN(width)){
     //Re-prompt the user
     width = prompt("Please do not leave blank and only use numbers.\nWhat is your width.");

 }

 //parseInt
 width =parseInt(width);

 var height = prompt("What is the height of the rectangle.");
 //validation
 while (height === "" || isNaN(height)){
     //re-prompt
     height = prompt("Please do not leave blank.\nWhat is your height.")
 }

 //parseInt
 height = parseInt(height);



 //function call
 var resultPeri =periRect(width, height);
 var resultArea = areaRect(width, height);

 //combine console.log out
 console.log("The perimeter of your rectangle is " + resultPeri + " and the area is " +resultArea+ ".");

 //create a combined function

 function combinedRect (w,h){
     //first calc the perimeter
     var p = 2*w + 2*h;

     //calc the area
     var a = w*h;

     //return both values
     return [p,a];
 }

 //function call the combined array
 var combinedResult =combinedRect(width, height);

 console.log(combinedResult);
 console.log("The perimeter of your rectangle is "+combinedResult [0]+" and the area is "+combinedResult [1]);