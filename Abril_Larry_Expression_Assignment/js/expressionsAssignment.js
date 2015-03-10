
 /*
Larry Abril
3/7/2015
Section 00
Expressions Assignment
 */


//alert("Just testing!");


//creating a array.
 //The following are the monthly bills.
 var bill = ["electricity", " water", " cable", " carInsurance"," rent"];
 //check to see if the array is ok.
 console.log("The following are my monthly bills to pay: " +bill);

 //verify your pay stub to make sure you earn enough money to pay your bills.
 var payStub = prompt("Please enter your monthly earned income after tax.");
 console.log("$" + + payStub + " is how much you made monthly after tax.");



//using prompt to put value to the bills.
 // each person is going to put their value for their bills.
 var electricity =prompt("Please enter the amount of your monthly electrical bill.");
 var water = prompt("your monthly water bill.");
 var cable = prompt("your monthly cable bill.");
 var carInsurance = prompt("your monthly car insurance bill.");
 var rent = prompt("your monthly rent bill.");

//find the total of the prompts.
 //the result of the user input is going to be the total monthly bills
var totalMonthlyBills = parseInt(electricity) + parseInt(water) + parseInt(cable) + parseInt(carInsurance) + parseInt(rent);

//Result of your prompt.
 // here you will find out the sum of all your monthly bills.
 console.log("If you pay all your bills in full and on time. Your monthly bill amount is $" + totalMonthlyBills + ".");

 // Let see how much you have left after paying the bills every month.
 var reminderAfterPayingBills = payStub - totalMonthlyBills;
 console.log(parseInt(reminderAfterPayingBills) + " will be your leftover money after paying your monthly bill.");

//I am using an assign operator other than = symbol to find the annual monthly amount.
 var annualMonthlyAmount = totalMonthlyBills;
 annualMonthlyAmount*= 12;
 console.log("If you continue to pay the bills monthly sharp. " + "Your annual monthly amount is going to be  $" + annualMonthlyAmount + " and your reminder money $" + reminderAfterPayingBills *12 + ".");

//test result.
/*

147 for electricity
40 for water
127 for cable
150 for car insurance
882 for rent

total = 1346

pay stub = 4200

    pay stub      4200
 -  monthly total 1346
------------------------
 = 2854 " leftover"

    monthly bills   1346
 *  12 months
------------------------
= 16152   annual bill amount


    2854   leftover
 *  12 months
-------------------------
= 34248   reminder money annually

==================================
 154 for electricity
 75 for water
 143 for cable
 90 for car insurance
 1050 for rent

 total = 1346

 pay stub =

 pay stub      4200
 -  monthly total 1346
 ------------------------
 = 2854 " leftover"

 monthly bills   1346
 *  12 months
 ------------------------
 = 16152   annual bill amount


 2854   leftover
 *  12 months
 -------------------------
 = 34248   reminder money annually
 */








