
 /*
Larry Abril
3/14/2015
Section 00
Day 6 While Loops
 */


//alert("Just testing!");

 //Basic while loops

 //start a counter variable
 var counter = 0;



 while(counter<200){
     console.log("Somethings never end");
     console.log(counter);

     //make a change to the counting variable
     counter+=50;

 }

 //do while loop
 // this loop will run the code first then check the condition.

 /*
 do{
    //code to run
   } while (condition) to test
  */


 var i = 20;
  do{
      console.log("The number is " + i + ".");

      //change the counting variable
      i++;

  } while(i<10);