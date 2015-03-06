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


