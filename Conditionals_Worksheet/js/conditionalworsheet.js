
 /*
Larry Abril
3/10/2015
Section 00
Conditionals Worksheet
 */


//alert("Just testing!");

// Group 1 Last Chance for Gas
//Create variables
 /*var efficiencyOfTheCar = prompt ("Enter the gas mpg for your car");
 var gaugeReadingOnTheGasTank = prompt("Enter how much gas do you have in your tank right now in %");
 var gasTankCapacity = prompt("Enter the gas tank capacity for you car");

 //verify how much gallons and miles are left
 var gallonsLeft= ( gaugeReadingOnTheGasTank / 100 ) * gasTankCapacity;
 console.log("You have " + gallonsLeft + " gallons left.");
 var milesLeft =gallonsLeft * efficiencyOfTheCar;
 console.log("You have " + milesLeft + " miles left.");

//using || to find out if you need to stop or keep driving
 if (milesLeft <= 200){
     console.log("You need to stop to get gas.");
 } else {
     console.log("You can keep driving.");
 }
*/

 /*
 // Group 2 Check the login
 //create variables
 var newUserName = prompt("enter a new user name");
 var newPassword = prompt("enter a new password");
 var verifyUser = prompt(" Please verify your user name");
 var verifyPass = prompt("Please verify your password");
 var savedName = newUserName;
var savedPassword = newPassword;

 // verify user name and password
 // result if user and password are correct
 //Result if user does not match
 //Result if password does not match

 if ((newUserName == verifyUser) && (newPassword == verifyPass)){
     console.log("Welcome, your login was successful");
 }

 if ((newUserName != verifyUser) && (newPassword == verifyPass)){
    console.log("User not found. Try again!");

} else if ((newUserName == verifyUser) && (newPassword != verifyPass)){
     console.log("Password does not match our records.");
 }
*/

 //Group 3 Movie Ticket Price
 //Create variables
 var ticketPrice = 12;
 var age = prompt("Enter your age");
 var discount = 7;
 var timeDiscount = prompt("Enter time");
 var ticketAfterDiscount = ticketPrice - discount;

 /*if ((age <=55) && (age >=10)){
     console.log("You have a $" + discount+". You ticket will be $" + ticketAfterDiscount + ".");
 } else {
     console.log("You pay $" + ticketPrice + " regular price.");
 }
 */

var result;
 result = (age <= 55 && age >= 10) ?   "You pay "+ticketPrice+"." : "You get $ "+discount+".";
 console.log(result);

var generalDiscount;
 generalDiscount= (timeDiscount >= 3 && timeDiscount <= 5) ? "You pay "+ticketPrice+"." : "You will paid $" + ticketAfterDiscount+ ".";
 console.log(generalDiscount);

 //This section gave me trouble.
 //I stayed i
 // the classroom the entire time for the lab but the time end up and I went home.
 //I spend some time on it but I couldn't figure it out.
 