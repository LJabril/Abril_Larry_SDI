
 /*
Larry Abril
3/12/2015
Section 00
Day 5 Nesting ifs
 */

 //alert("Just testing!");

 //some decision affect other decision
 //If is warn then go to the beach if it is not lets go to the beach

 //get temperature
 var temp = prompt("We are going to figure out what are you doing today.\nWhat is the current temperature outside?");

//validate that the user type in something =did they leave it blank
 if (temp === ""){
     //this code will run if the user type in nothing
     //repromp the user
     temp = prompt("Please do not leave this blank. It is required!\nWhat is the current temperature outside?")
 }



 //validate that the user typed in a number
 // isNaN() = is not a number
 // literally say it out laud is monkey not a number
 console.log(isNaN(7));
 console.log(isNaN("monkey")); //gives us a true



 if (isNaN(temp)){
     //this code will run when temp is not a number
     //reprompt the user for the information
     temp = prompt("Please only type a number.\nType the temp outside")
     console.log("");
 }


 if (temp>= 80){
     console.log("Lets go to the beach");

    // set water temp
     var waterTemp =prompt("what is the water temperature?");

     //validate the water temp
     if (waterTemp === "" || isNaN(waterTemp)){
         //this code will run if the variable is blank

         //reprompt
         waterTemp = prompt("Please do not leave blank and only use numbers\nWhat is the water temp?");

     }

     if (waterTemp >75){
         console.log("Lets go swimming");

         var knowSwim ="yes";


         if (knowSwim == prompt("Do you know how to swim?"));

         //convert the text string to lower case
         //toLowerCase = dot syntax = use a period.
         knowSwim = knowSwim.toLowerCase();


         //validate the knowSwim variable

         //validate
         if (knowSwim != "yes");
         //reprompt
         knowSwim =prompt("Only type yes or no.\nCan you swim?")

     } else {
         console.log("Lets get a tan");
     }


 } else {
     console.log("Lets go to the movies");
     //do we have any kids in the group
     var kids = prompt("Are you bringing kids?");

     //validate
     kids=kids.toLocaleLowerCase();
     if (kids != "yes" && kids != "no"){
         //reprompt
         kids = prompt("Please enter only yes or no.\nAre you bringing kids?");
         // permanently to lowercase again
         kids= kids.toLocaleLowerCase();

     }



     //test if we have kids
     if (kids === "no"){
         console.log("Lets go to see 50 shades of grey!");
     } else {
         console.log("Lets go to see Sponge Bob!");
     }


 }


 /*
 //if the water temp is above 75, lets go swimming if not lets get a tan

 if (waterTemp >75){
     console.log("Lets go swimming");
 } else {
     console.log("Lets get a tan");
 }
     */

 //do we have any kids in the group
