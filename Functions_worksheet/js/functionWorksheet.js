
 /*
Larry Abril
3/17/2015
Section 00
Functional Worksheet
 */
var radius = 1;

//alert("Just testing!");


 // create a function to calculate a circle circumference
 function circleParameter(r){
//calc area = 2 * PI * r
     var circumference= 2 * Math.PI * r;
//return the value
     return circumference;
 }

 var circParameter = circleParameter(radius);
 //console.log(); the results
 console.log("The area of the circle is "+ circParameter);

