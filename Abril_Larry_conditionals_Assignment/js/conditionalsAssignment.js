
 /*
Larry Abril
3/12/2015
Section 00
Conditionals Assignment
 */


//alert("Just testing!");

 //We are going to Disney World!
 //We have to check how many cars do we need to get there
 //Taking in count how many people are going.


 //create ALERT to let the user know what is going to happen.
 alert("I am planning your trip to Disney World!\nBut first, I need some numbers.")

 //create variables for total of people.
 var peopleGoing = prompt("We are going to check how many cars are needed.\nPlease enter how many people are going.");

 //validate if the user do not put a number
 if (peopleGoing === ""){
     //re-prompt the user
     peopleGoing = prompt("Please do not leave this blank.\nHow many people are going?.")

 }

// create variable for capacity in the vehicles
 var vehicleCapacity = 5;

//check how many vehicles are needed
 if (peopleGoing > vehicleCapacity){
     console.log("You will need more than 1 vehicle. A vehicle hold up to 5 people.");
 } else{
     console.log("All of you fit in one vehicle.");
 }

 //check how many tickets do you want
 var totalTicket = prompt("We are going to figure out if you can buy the tickets for the park.\nPlease enter how many tickets do you want.");
 //re-prompt to make sure is not blank
 if (totalTicket === "") {
     totalTicket = prompt("Do not leave this blank. How many tickets do you want?");
 }


//once figured out the car situation. You need to check if there is enough money to enter to the park
 //create a variable for ticket price
 var ticketPrice = 30;
 var budgetForTickets = prompt("Enter how much money you are willing to spend for tickets.\nEvery ticket is on sale for $30.");
 var totalTicketPrice =ticketPrice * peopleGoing;
 var change = budgetForTickets - totalTicketPrice;

 //re-prompt to make sure is a number for the budget.
 if (budgetForTickets === "") {
     budgetForTickets = ("Please let me know how much money are you willing to spend.\nPut an amount.");
 }

 //check if you have money to buy tickets.
 (budgetForTickets >= totalTicketPrice) ? console.log("You can buy the tickets.") : console.log("Sorry! You don't have enough money");

 //check if you have money left after buying the tickets.
 if (budgetForTickets >=totalTicketPrice){
     console.log("If you budget is $" + budgetForTickets + ". Then your change is $" + change + ".");
 } else if (budgetForTickets < totalTicketPrice){
     console.log("If your budget is $" + budgetForTickets + " You don't have enough.Therefore you don't get change.");
 }