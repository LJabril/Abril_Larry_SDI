/*
Larry Abril
3/7/2015
Practicing at Home
 */

alert("This is a test")

// mother and father's name.

var femaleName = "Rosselyn";
console.log("Mother's Name " + femaleName);
var maleName = "Larry Sr";
console.log("Father's Name " + maleName);

// had a great night!

var sonName = "LJ Jr";
console.log("Son's " + sonName);

// Result.
console.log("The result of " + femaleName +" -N- " + maleName + " is equal to " + sonName + ".");
console.log("                            ");

// Went shopping
//Bought few items.
console.log("Went shopping and bought the following:");
var snickers = "MJ #7";
var short = "MJ's short";
var shirt = "MJ's shirt";

var snickerPrice = 139.99;
var shortPrice = 39.99;
var shirtPrice = 24.99;

// write item + price
console.log("The " + snickers + " cost $" + snickerPrice + ".");
console.log("The " + short + " cost $" + shortPrice + ".");
console.log("The " + shirt + " cost $" + shirtPrice + ".");

// total price.
var totalPrice = snickerPrice + shortPrice + shirtPrice;
console.log("My total price for the " + snickers + ", " + short + ", and " + shirt + " is $" + totalPrice);

// money gave to the cashier
var money = 300.00;
var moneyChange = money - totalPrice;
console.log("I gave $" + money + " to the cashier and I had " + moneyChange + " back.");

// using the module
var reminderOfMoney = totalPrice % money;
console.log(reminderOfMoney);
//I had trouble with the modulo.
