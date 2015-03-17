
 /*
Larry Abril
3/17/2015
Section 00
Day 7 Zombies
 */


//alert("Just testing!");

 //Zombies Attack
 // We have accidentally a zombie at Full Sail.
 //A Zombie can bite 4 people a day  and turn them into zombie the next day.
 //The CDC wants to know how many Zombie there will be in 8 days?

 //Givens that we know.

 //How many Zombie do we have

 var numZombies= 1;

 //How many bites per Zombies per day
 var numBites= 4;

 //Numbers of day that CDC wants
 var days=8;

 // create for Loops to calculate zombie number
 for (var i=1; i<=days; i++){

     //how many new zombie get made every day
     var newZombie= numZombies*numBites;

     //add the new zombie to our exhausted horde
     numZombies+= newZombie;

     //console.log(""); the results
     console.log("There are " + numZombies + " number of zombie on day #" + i+ "!");
 }



 //how long will it takes to get a million zombies
 