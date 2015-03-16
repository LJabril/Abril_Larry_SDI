
 /*
Larry Abril
3/14/2015
Section 00
Day 6 for Loops
 */


alert("Just testing!");

 //for(initialization; condition; increment of change) {}
 //we use i A LOT in loops because it stands for interaction

 for (var i =0; i<20; i+=1){
     console.log("The value of the i is " + i);
 }
 console.log(i);

 //Break in a loop

 for (var j =0; j<5; j++){
     //conditional to test if we should break the loop
     //if the value of j is 3 console.log something different and stop the loop

     if (j === 3 ){
         //stop the loop but first console.log something
         console.log("J is 3 !!!");
         break;
     }
     console.log("The value of is " + j);

 }

 //Specific cases for each value

 for (var k = 0; k<3; k++){

     if (k === 0){
         console.log("The value is zero");
     } else if (k===1){
         console.log("The value is one");
     } else if (k === 2){
         console.log("The value is two");
     }


 }

