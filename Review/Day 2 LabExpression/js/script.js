/*
Larry Abril
3/5/2015
Section 00
Day 2 Lab Expression
 */

alert("Testing to see if connected");

// Slice of Pie part 1

var slicesPerPizza = prompt("We are going to find out how many slices does the pizza has.\nHow many slices per pizza.");
//validation
while (slicesPerPizza === "" || isNaN(slicesPerPizza)){
    //re-prompt the user to make sure its not blank and its a number
    slicesPerPizza = prompt("Please do not leave blank and only use numbers.\nHow many slices per pizza");
}

//parseInt
slicesPerPizza = parseInt(slicesPerPizza);


var peopleAtTheParty = prompt("We are going to find out how many people are at the party.\nHow many people are at the party?");
//validation
while (peopleAtTheParty === "" || isNaN(peopleAtTheParty)){
    //re-prompt the user to make sure its not blank and its a number
    peopleAtTheParty = prompt("Please do not leave blank and only use numbers.\nHow many people are at the party?");
}

//parseInt
peopleAtTheParty = parseInt(peopleAtTheParty);


var pizzasOrdered = prompt("We are going to find out how many pizzas were ordered.\nHow many pizzas ordered?");
//validation
while (pizzasOrdered === "" || isNaN(pizzasOrdered)){
    //re-prompt the user to make sure its not blank and its a number
    pizzasOrdered = prompt("Please do not leave blank and only use numbers.\nHow many pizzas ordered?");
}

//parseInt
pizzasOrdered = parseInt(pizzasOrdered);

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
var week1 = prompt("We are going to find out how much is your grocery bills for 5 weeks.\nHow much did you spent in week 1?");
//validation
while (week1 === "" || isNaN(week1)){
    //re-prompt the user to make sure its not blank and its a number
    week1 = prompt("Please do not leave blank and only use numbers.\nHow much did you spend in week 1 ?");
}

//parseInt
week1 = parseInt(week1);

var week2 = prompt("How much did you spent in week 2?");
//validation
while (week2 === "" || isNaN(week2)){
    //re-prompt the user to make sure its not blank and its a number
    week2 = prompt("Please do not leave blank and only use numbers.\nHow much did you spend in week 2?");
}

//parseInt
week2 = parseInt(week2);

var week3 = prompt("How much did you spent in week 3?");
//validation
while (week3 === "" || isNaN(week3)){
    //re-prompt the user to make sure its not blank and its a number
    week3 = prompt("Please do not leave blank and only use numbers.\nHow much did you spend in week 3?");
}

//parseInt
week3 = parseInt(week3);

var week4 = prompt("How much did you spent in week 4?");
//validation
while (week4 === "" || isNaN(week4)){
    //re-prompt the user to make sure its not blank and its a number
    week4 = prompt("Please do not leave blank and only use numbers.\nHow much did you spend in week 4?");
}

//parseInt
week4 = parseInt(week4);

var week5 = prompt("How much did you spent in week 5?");
//validation
while (week5 === "" || isNaN(week5)){
    //re-prompt the user to make sure its not blank and its a number
    week5 = prompt("Please do not leave blank and only use numbers.\nHow much did you spend in week 5?");
}

//parseInt
week5 = parseInt(week5);

var totalSpendOnGrocery = week1 + week2 + week3 + week4 + week5;
console.log(totalSpendOnGrocery);

//Average weekly grocery spending.
var averageWeeklyGrocerySpending = totalSpendOnGrocery / 5;
console.log(averageWeeklyGrocerySpending);

//Result Format.
console.log("You have spent a total of $" + totalSpendOnGrocery + " on groceries over 5 weeks.\nThat is an average of " + averageWeeklyGrocerySpending + "% per week.");


//Discount
//Givens.

var descriptionOfItem = prompt("What is the name of your item?");
//validation
while (descriptionOfItem === ""){
    //re-prompt the user to make sure its not blank and its a number
    descriptionOfItem = prompt("Please do not leave blank.\nWhat is the name of your item?");
}

console.log(descriptionOfItem);


var originalPrice = prompt("How much cost?");
//validation
while (originalPrice === "" || isNaN(originalPrice)){
    //re-prompt the user to make sure its not blank and its a number
    originalPrice = prompt("Please do not leave blank and only use numbers.\nHow much cost?");
}

//parseInt
originalPrice = parseInt(originalPrice);
console.log(originalPrice);



var discountPercentage = prompt("How much is the discount % ?");
//validation
while (discountPercentage === "" || isNaN(discountPercentage)){
    //re-prompt the user to make sure its not blank and its a number
    discountPercentage = prompt("Please do not leave blank and only use numbers.\nHow much is the discount % ?");
}

//parseInt
discountPercentage = parseInt(discountPercentage);
console.log(discountPercentage);


var discountDecimal = discountPercentage/100;
console.log(discountDecimal);

var salesTaxPercentage = prompt("How much is the sales tax % ?");
//validation
while (salesTaxPercentage === "" || isNaN(salesTaxPercentage)){
    //re-prompt the user to make sure its not blank and its a number
    salesTaxPercentage= prompt("Please do not leave blank and only use numbers.\nHow much is the sales tax % ?");
}

//parseInt
salesTaxPercentage = parseInt(salesTaxPercentage);
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

