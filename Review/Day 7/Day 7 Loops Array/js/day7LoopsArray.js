
 /*
Larry Abril
3/17/2015
Section 00
Day 7 Loops Array
 */


//alert("Just testing!");

 //tell each member of the scooby game that the solve the mystery

 //create an array of gang members
 var names =["scooby Doo", "Shaggy", "Velma", "Daphne", "Fred"];
//add scrappy to the gang

 names.push("Scrappy");
 //create for loop to cycle through the array

 for (i=0; i<names.length; i++){
     console.log("You solve the the case "+ names[i]+"!");

 }

 //Keep track of our bills and get the total and averages

 var bills= [50,10,5,20,10,60,70];

 //create variables for total and averages

 var total= 0;
 var average= 0;

 //create a variable to track the item total
 var numItems = 0;

 for (var j=0; j<bills.length; j++){

     //only add them if they are older or equal $15

     if (bills[j] >=15){
         //add each bill to the total
         total += bills[j];
         numItems++

     }

 }
 console.log("The total is $" + total);

 //calculate the average
 average = total/numItems;
 console.log("The average is "+ average);

