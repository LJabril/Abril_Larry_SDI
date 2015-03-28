
 /*
Larry Abril
3/17/2015
Section 00
Day 7 Beer
 */


//alert("Just testing!");

 //code the song 99 bottles of beer on the wall.

 //basic structure for loop
 //for(var i = 0; condition to test; increment of change){}

 for (var i =99; i>0; i--) {
     if (i === 1){
         console.log( "1 bottles of beer on the walls. 1 bottles of beer. You pass it around. No more bottles of beer on the wall.\nThe End!");
     } else {
         console.log(i + " bottles of beer on the walls." + i + " bottles of beer. You pass it around." + (i-1) + "bottles of beer on the wall.");
     }


 }