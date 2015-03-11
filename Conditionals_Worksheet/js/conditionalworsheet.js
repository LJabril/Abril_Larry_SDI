
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