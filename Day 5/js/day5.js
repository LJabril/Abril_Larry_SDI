
 /*
Larry Abril
3/12/2015
Section 00
Day 5 Steak
 */


//alert("Just testing!");

 //Test a steak temperature and tell the user the done
/*
 Extra-rare or Blue (blue) 	115–120 °F
 Rare 125–130 °F
 Medium rare 130–140 °F
 Medium 140–150 °F 	145 °F
 Medium well 150–155 °F
 Well done 	160 °F+
*/
//create a variable for the steak temperature

 var steakTemp = prompt("What is the temperature of your steak");

 //we have to test each of the test to see where our temp falls into.

 if (steakTemp<115){
     console.log("Your steak is uncooked");
 } else if (steakTemp <125){
     console.log("Your steak is extra-rare or Blue");
 } else if (steakTemp <130){
     console.log("Your steak is rare");
 } else if (steakTemp <140){
    console.log("Your steak is medium rare");
 } else if (steakTemp<150){
     console.log("Your steak is medium");
 } else if (steakTemp<155){
     console.log("Your steak is medium well");
 } else if (steakTemp<160){
     console.log("Your steak is well done");
 } else if (steakTemp>=160) {
     console.log("Your steak is burnt");
 }