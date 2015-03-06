/*
Larry Abril
3/5/2015
Section 00
Day 2 Lab Expression
 */

alert("Testing to see if connected");

// Slice of Pie part 1

var slicesPerPizza = 8 ;
var peopleAtTheParty = 36 ;
var pizzasOrdered = 6;

//Number of slide per person.
// Multiply the pizzas ordered by the slides per pizza and then divide in the people at the party.

var slicesPerPerson = (pizzasOrdered * slicesPerPizza) / peopleAtTheParty;
console.log(slicesPerPerson);

// Result Format.
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//Slice of Pie part II
var dog = "sparky";
console.log("The host's dog name is " + dog);

// Sparky is hungry and ready to eat the leftover.
// We are going to use the modulo to get the sparky' pizza

var reminderForSparky = (pizzasOrdered * slicesPerPizza) % peopleAtTheParty;
console.log(reminderForSparky);

//Sparky is happy! Too many pizza.
//Result Format.

console.log("Sparky got " + reminderForSparky + " slices of pizza.");

// Average shopping bill

//Find a weekly grocery bills.
var week1 = 79;
var week2 = 84;
var week3 = 56;
var week4 = 62;
var week5 = 71;
var totalSpendOnGrocery = week1 + week2 + week3 + week4 + week5;
console.log(totalSpendOnGrocery);

//Average weekly grocery spending.
var averageWeeklyGrocerySpending = totalSpendOnGrocery / 5;
console.log(averageWeeklyGrocerySpending);

//Result Format.
console.log("You have spent a total of $" + totalSpendOnGrocery + " on groceries over 5 weeks.\nThat is an average of " + averageWeeklyGrocerySpending + "% per week.");


//Discount
//Givens.

var originalPrice = 399.99;
console.log(originalPrice);

var discountPercentage = 40;
console.log(discountPercentage);

var discountDecimal = discountPercentage/100;
console.log(discountDecimal);

var descriptionOfItem = "New iWatch";
console.log(descriptionOfItem);

var salesTaxPercentage = 7
var salesTaxDecimal = salesTaxPercentage/100;
console.log(salesTaxDecimal);


var discountAmount = originalPrice * discountDecimal;
console.log(discountAmount);



//Result Variables

var priceOfTheItemWithoutTax = originalPrice - discountAmount;
console.log(priceOfTheItemWithoutTax);

var saleTaxAmount = priceOfTheItemWithoutTax * salesTaxDecimal;
console.log(saleTaxAmount);

var priceOfTheItemWithTax = priceOfTheItemWithoutTax + saleTaxAmount;
console.log(priceOfTheItemWithTax);

console.log("Your " + descriptionOfItem + " was originally $" + originalPrice + " , but after a " + discountPercentage + "% discount, it is now " + priceOfTheItemWithoutTax + "\nwithout tax, and $" + priceOfTheItemWithTax + " with tax.");

