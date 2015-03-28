
 /*
Larry Abril
3/7/2015
Section 00
Day 4 Ternary
 */


//alert("Just testing!");

 //if your GPA is over 2.0 then you can graduate

 //create a variable for gpa
 var gpa = 3.5;

 //basic conditional
 if(gpa >2.0){
     console.log("You can graduate!");
 } else {
     console.log("Work harder, you can not graduate!");
 }


//basic ternary function
 // (condition to test) ? code to run if true : code to run if false

 //create a basic ternary function for our GPA
 (gpa > 2.0) ? console.log("You can graduate") : console.log("Work harder, you can not graduate");

 //if a child is under 10 then they must read  Green Eggs & Ham , otherwise they can read the Time Machine.

 //create a variable for the child age and for the books

 var age = 16;
 var book;

 //use the ternary to
 book = (age < 10) ? "Green Eggs & Ham" : "The Time Machine";

 console.log("The kid should read " + book + ".");

 //value of book if basic conditional

 var bookBasic;

 if (age < 10){
     bookBasic = "Green Eggs & Ham"
 } else {
     bookBasic = "The Time Machine";
 }

 console.log(bookBasic);