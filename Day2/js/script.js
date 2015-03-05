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
whatever1 = 42;
//console.log the variable.
console.log("The variable whatever1 is ");
console.log(whatever1);

//Declare and define a variable at the same time.
var a = 2;
console.log(a);

a + 3;
a = a+3
console.log(a);

//Decleare a new variable.
var b;

//Define this variable using an existing variable.
b = a+3;
console.log(a);
console.log(b);

//Simple math
//Find our ages

//Declare and define the year we were born
var yearBorn = 1984;
// 2015 - year we are born
var ourAge = 2015-yearBorn;
console.log(ourAge);

//Talk about Math
// +, -, *, /

//Find the are of the triangle
// base * height / 2
var base = 8;
var height = 5;
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
var assign = 0;

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

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 90;

// Average is add them up and divide by the number of quizes.
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
console.log(n);








