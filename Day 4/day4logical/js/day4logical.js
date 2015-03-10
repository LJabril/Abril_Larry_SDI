
 /*
Larry Abril
3/7/2015
Section 00
Day 4 Logical
 */


//alert("Just testing!");

 //basic conditional, if we have enough to buy a car

 //create a few variables
 var budget = 15000;
 var carPrice = 23000;
 var payCheck = 1600;

 if (budget >= carPrice){
     console.log("You can afford your car!");
 } else{
     console.log("You are broke! Take the bus!");
 }

 //we can buy the car if our budgets is greater or equal to the car price
 // OR our paycheck more than 1500

 if(budget >= carPrice || payCheck >1500 ){
     console.log("You can buy the car!");
 } else{
     console.log("You dont make enough money and your budget is too low");
 }


 /*
 True Table for || "or"
 t || t = t
 t || f = t
 f || t = t
 f || f = f
  */

 /*
 True Table for && "and"
 t && t = t
 t && f = f
 f && t = f
 f && f = f
  */

 // You can buy a car if the budget is greater or equal the car price AND your paycheck is over 1500
 if (budget >= carPrice && payCheck > 1500){
     console.log("You can buy the car!");
 } else {
     console.log("Pick a cheaper car");
 }