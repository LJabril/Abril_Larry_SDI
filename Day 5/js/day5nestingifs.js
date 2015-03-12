
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
 var temp = 75;
 var waterTemp =78;


 if (temp>= 80){
     console.log("Lets go to the beach");
     if (waterTemp >75){
         console.log("Lets go swimming");
     } else {
         console.log("Lets get a tan");
     }


 } else {
     console.log("Lets go to the movies");
     //do we have any kids in the group
     var kids = "no";
     if (kids === "no"){
         console.log("Lets go to see 50 shades of grey!");
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
