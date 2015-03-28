
 /*
Larry Abril
3/17/2015
Section 00
Day 7 Returns
 */


//alert("Just testing!");

 //Return a value for our function to our main code

 //create a function calc the area of rectangle
 function calcArea(w,h){
     //calc the area
     var area= w*h;
     console.log("Inside the function the area is " + area);

     //return the area to the main code
     return area;


 }

//call the function
//create a variable to catch the return value

 var rectArea = calcArea(10,20);

 //console.log the area
 //console.log(area);
 console.log(rectArea);


 // create a function to calculate a circle
 function circleArea(r){
     //calc area = PI * r *r
     var area = Math.PI * r *r;

     //return the value
     return area;
 }
 //function call this circle area
 // create a variable to catch the return area

 var circArea = circleArea(6);

 //console.log(); the results
 console.log("The area of the circle is "+circArea);


 //what is twice the circle area of a 6" circle
 var resultTwice =circArea*2;
 console.log("The are twice is " + resultTwice);


