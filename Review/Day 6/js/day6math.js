
 /*
Larry Abril
3/14/2015
Section 00
Day 6 Math
 */


//alert("Just testing!");

 //Math.round() = basic rounding. +5 goes up or lower goes down
 var num1 =9.544;
 console.log(num1);
 console.log(Math.round(num1));

 //Math.floor = always round down
 var num2 = 6.8;
 console.log(num2);
 console.log(Math.floor(num2));

 //Math.ceil() = always round up if it is a decimal
 var num3 = 4.15;
 console.log(num3);
 console.log(Math.ceil(num3));

 //Math.random() = this returns a number between 0 and almost 1
 var num4 = Math.random();
 console.log(num4);

 //a random number between 0 and 10
 var num5 = Math.random()* 10;
 console.log(num5);

 // Random integer between 0 and 100
 var num6 = Math.round(Math.random()* 100);
 console.log(num6);

 //random number between two number that does not start with zero.
 //Math.random() * (max-min) + min
 //a random number between 50 and 80

 var num7 = Math.round(Math.random()*(80-50)+50);
 console.log(num7);

 //math object constant
 //area of circles = radius * radius * pie
  var radius = 7;

 var areaCircle = radius * radius * Math.PI;

 //.toFixed(#) = round the number to the number of decimal places that match s the # inside of the ()

 console.log(areaCircle.toFixed(3));

