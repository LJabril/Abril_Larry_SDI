
 /*
Larry Abril
3/7/2015
Section 00
Expressions Assignment
 */


//alert("Just testing!");


//creating a array.
 var bill = ["electricity", "water", "cable", "carInsurance","rent"];
 //check to see if the array is ok.
 console.log(bill);

//using prompt to put value to the bills.
 var electricity =prompt("Please enter the amount of your monthly electrical bill.");
 var water = prompt("your monthly water bill.");
 var cable = prompt("your monthly cable bill.");
 var carInsurance = prompt("your monthly car insurance bill.");
 var rent = prompt("your monthly rent bill.");

//find the total of the prompts.
var totalMonthlyBills = parseInt(electricity) + parseInt(water) + parseInt(cable) + parseInt(carInsurance) + parseInt(rent);

//Result of your prompt.
 console.log("If you pay all your bills in full and on time. Your monthly bill amount is $" + totalMonthlyBills + ".");



