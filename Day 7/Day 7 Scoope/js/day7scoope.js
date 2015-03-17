
 /*
Larry Abril
3/17/2015
Section 00
Day 7 Scope
 */


//alert("Just testing!");

 //variable scope
 //variable inside and outside of a function

 //Try not to use the same variable names, BUT
 // in big files this is going to be impossible


 //Create a variable for width in our MAIN CODE
 //scoped outside of the function - "MAIN CODE"

 var width =5;


 //create a function that calc the perimeter of a rectangle
 function calcPeri(){

     //create a variable called width inside of the function
     //Scope to the
      var width =10;

     //create a variable for height and perimeter
     var height = 20;
     var perimeter = width*2 + height*2;

     console.log("Inside of the function , the perimeter is " + perimeter);

     //variables created inside of a function can Not be accessed outside the function . BUT usually will not be.
     

 }
 console.log("Before the function call , width = "+ width);

 calcPeri();
 console.log("After the function call, width = " + width);

//console.log(""); the answer
 //this do not work because VEGAS!
 //console.log("Outside of the function the perimeter is " + perimeter);




