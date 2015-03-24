
 /*
Larry Abril
324/2015
Section 00
Day 8 Procedures
 */


//alert("Just testing!");

 //This is a BASIC FUNCTION
 function calcAreaF (w,h){
     var area = w*h;
     return area;
 }
 //function call
 var area = calcAreaF(6,8);
 console.log("Te area of the rectangle is " + area+ ".");





 //This is a PROCEDURE
 //A list of step to do.

 function calcAreaP (w,h){
     var area =w*h;

     //we do not RETURN this value
     console.log("Inside the procedure is " +area +".");

 }

 // FUNCTION CALL for the PROCEDURE?
 //just the Function Name ... NO variable to catch it
 calcAreaP(12,16);
