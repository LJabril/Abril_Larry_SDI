/*
 Larry Abril
 3/5/2015
 Section 00
 Day 2 Intro
 */

//alert("Testing to see if connected");

/*
 Example of a multi-line comment.


 Anything inside of here will not be seen by the computer.
 */

// Single line comment. ONLY this line will be ignored.

// Alert box-pop up box that will alert the user with information.

alert("Text that the user will see.");

//Console.log - Show information to the programmer.
// Great for checking values and debugging.
// Also show all errors.
console.log("This is the console.");

// Declare a variable.
// Use the keyword of var.
var whatever1;

// Define the variable.
// Set the value of the existing variable.
var whatever1 = prompt("We are going to find out a number for a value.\nEnter a number.");
//validation
while (whatever1 === "" || isNaN(whatever1)){
    //re-prompt the user to make sure its not blank and its a number
    whatever1 = prompt("Please do not leave blank and only use numbers.");
}

//parseInt
whatever1 = parseInt(whatever1);





//console.log the variable.
console.log("The variable whatever1 is " + whatever1+ ".");


//Declare and define a variable at the same time.
var a = prompt("Enter a number.");
//validation
while (a === "" || isNaN(a)){
    //re-prompt the user to make sure its not blank and its a number
    a = prompt("Please do not leave blank and only use numbers.\nEnter a number");
}

//parseInt
a = parseInt(a);

console.log(a);

a + 3;
a = a+3
console.log(a);

//Declare a new variable.
var b = prompt("Enter a number.");
//validation
while (b === "" || isNaN(b)){
    //re-prompt the user to make sure its not blank and its a number
    b = prompt("Please do not leave blank and only use numbers.\nEnter a number.");
}

//parseInt
b = parseInt(b);




//Define this variable using an existing variable.
b = a+3;
console.log(a);
console.log(b);

//Simple math
//Find our ages

//Declare and define the year we were born

var yearBorn = prompt("We are going to find out how old are you.\nEnter the year you were born.");
//validation
while (yearBorn === "" || isNaN(yearBorn)){
    //re-prompt the user to make sure its not blank and its a number
    yearBorn = prompt("Please do not leave blank and only use numbers.\nEnter the year");
}

//parseInt
yearBorn = parseInt(yearBorn);





// 2015 - year we are born
var ourAge = 2015-yearBorn;
console.log(ourAge);

//Talk about Math
// +, -, *, /

//Find the are of the triangle
// base * height / 2
var base = prompt("We are going to find out the area of a triangle.\nEnter the base.");
//validation
while (base === "" || isNaN(base)){
    //re-prompt the user to make sure its not blank and its a number
    base = prompt("Please do not leave blank and only use numbers.\nEnter a number");
}

//parseInt
base = parseInt(base);


var height= prompt("Enter the height for your triangle.");
//validation
while (height === "" || isNaN(height)){
    //re-prompt the user to make sure its not blank and its a number
    height = prompt("Please do not leave blank and only use numbers.\nEnter the height");
}

//parseInt
height = parseInt(height);







var areaTriangle = base*height/2;
console.log(areaTriangle);

// Modulo - %
// Gives the reminder
var decimal = 32/10;
console.log(decimal);
var reminder = 32%10;
console.log(reminder);

//Find out if even or odd
// %2 1=odd 0=even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assignment Operators
/*
 = Assigns the values to the variable.
 ++ adds 1 to the current valuable of the variable
 -- subtract 1 from the current value of a variable
 += # Adds the # to the current of the variable
 -= # subtracts the # from the value of the variable
 /= # divide the current value by the #
 *= # multiply the current value by the number
 */

var assign = prompt("We are going to learn how to use the assignment operator.\nPlease enter a number to start.");
//validation
while (assign === "" || isNaN(assign)){
    //re-prompt the user to make sure its not blank and its a number
    assign = prompt("Please do not leave blank and only use numbers.\nEnter a number");
}

//parseInt
assign = parseInt(assign);






// ++ is the same as assign = assign+1;
assign++;
console.log(assign);

// -- is the same as a assign = assign-1;
assign--;
console.log(assign);

// += # is the same as assign = assign + #;
assign +=5;
console.log(assign);

// -= is the same as assign = assign - #;
assign -=2;
console.log(assign);

// /= is the same as assign = assign/#;
assign/=3;
console.log(assign);

// *= is the same as assign = assign *=;
assign *=7;
console.log(assign);

//String - any text that we use
// Quotes are needed to distinguish between variables and plain text.

var kermit = "light green";
var frogName = "kermit";
console.log(frogName);

//to double quote or not to double
// can you use an escape character in front of the \
var phrase = 'I don\'t know';
console.log(phrase);

//escape character can also do multiple lines \n - new line character
var phrase2 = "I don't know. \nYou never do!";
console.log(phrase2);

// boolean kind of like a light switch
//either true or false
//not a text string and must be lower case!!
var yes = true;

var no = false;

//order of operations
// PEMDAS Please Excuse My Dear Aunt Sally
// Parenthesis , Exponents, Multiplication, Division, Addition, Subtraction

// find the average quiz grade

var quiz1 = prompt("We are going to find out the quizzes averages.\nPlease enter the grade for quiz 1");
//validation
while (quiz1 === "" || isNaN(quiz1)){
    //re-prompt the user to make sure its not blank and its a number
    quiz1 = prompt("Please do not leave blank and only use numbers.\nEnter the grade");
}

//parseInt
quiz1 = parseInt(quiz1);


var quiz2 = prompt("Please enter the grade for quiz 2.");
//validation
while (quiz2 === "" || isNaN(quiz2)){
    //re-prompt the user to make sure its not blank and its a number
    quiz2 = prompt("Please do not leave blank and only use numbers.\nEnter the grade");
}

//parseInt
quiz2 = parseInt(quiz2);

var quiz3 = prompt("Please enter the grade for quiz 3.");
//validation
while (quiz3 === "" || isNaN(quiz3)){
    //re-prompt the user to make sure its not blank and its a number
    quiz3 = prompt("Please do not leave blank and only use numbers.\nEnter the grade");
}

//parseInt
quiz3 = parseInt(quiz3);



// Average is add them up and divide by the number of quizzes.
var average = (quiz1 + quiz2 + quiz3) /3;
console.log(average);

//concatenation - combining text string
// use the + plus sign - add and concatenation

var firstName = "kermit";
var lastName = "the frog";
var fullName = firstName +" "+ lastName;
console.log(fullName);

var d = "6";
var e = "7";
// if you want the text string to be a number you have to cast it
//number(the text string)

var combined = d+e;
console.log(combined);

var pi = 3.14;


// to round  a number we use .toFixed(#)
var num = 5.5678912345;

//round to 2 decimal places
var n = num.toFixed(2);

console.log("The rounded number to 2 decimal places is" +""+n);










