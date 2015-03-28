
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


// Stung Problem
 //create variables
 /*
 var numStings = 8.666666667;
 var numPound = 170;

 //create loops to calculate stings needed
 while (numStings < numPound){
     var stingsNeeded = numStings * numPound;

     numStings += stingsNeeded;

     console.log(stingsNeeded +" are needed to kill an animal ");

 }
 */

 var stings = 8.666666667
 var numPound = 170;

 function numStings(s) {
     //calculate the sting needed
     var stingNeeded = stings * numPound;

     //return the value
     return stingNeeded;
 }
      var amountSting= numStings(stings);
 console.log(amountSting +" are needed to kill an animal ");

