
 /*
Larry Abril
3/26/2015
Section 00
Day 9 Pizza
 */
//console.log("Start");

//alert("Just testing!");

 //Figure out how much pizza cost per slice and cost per sq in

 //prompt the user for the radius of the pizza

 var pizzaRadius = prompt("Welcome! Let's calculate the cost of your pizza.\nWhat is the radius of your pizza?");

 //validate
 while (pizzaRadius === "" || isNaN(pizzaRadius)){
     //re-prompt the user
     pizzaRadius = prompt("Please do not leave blank and only use numbers.\nWhat is the radius of your pizza?");

 }
 //Prompt the user for the cost of the whole pizza
 do {

     var pizzaCost = prompt("How much does your pizza cost in total?\nReminder please do not leave blank and only use numbers.");

 } while (pizzaCost === "" || isNaN(pizzaCost));

 //prompt the user for how many slices are in their pizza

 do{
     var pizzaSlices = prompt("How many slices are in your pizza?\nReminder only use numbers and do not leave blank.");
 } while (pizzaSlices === "" || isNaN(pizzaSlices));


 //function call to lord function
 var result = lordFunction(pizzaRadius,pizzaCost,pizzaSlices);


 //console.log out  / info to user
 console.log("Your pizza cost $"+result[0]+" per square in or $"+result[1]+" per slice.");

 //create a function that will
 function lordFunction (radius,cost,slices) {
     //function will call the other 3 function and the return the values

     // call the function and capture the answer
     var area = pizzaArea(radius);

     //call the function sqIn cost
     var areaCost = pizzaSqInCost(area,cost);

     //call slice for price
     var slicesPrice = pricePerSlices(slices,cost);
//console.log("Test lord function");
     //return this answer to our main cost
     return [areaCost,slicesPrice];



 }

 //function that calculates the area of the pizza
 function pizzaArea(r){
//console.log("test pizza area");
     //are = r*r *Pi
     var area = r*r*Math.PI;
     return area;

 }

 //function that calculates the price per sq in of pizza
 function pizzaSqInCost (area,price){
     // price / area
     var costPerSqIn = price/area;
//console.log("test pizza sq in");
     //we should round this number to 2 decimal places
      costPerSqIn = costPerSqIn.toFixed(2);
     return costPerSqIn;

 }


 //function that calculate the price per slices
 function pricePerSlices (slices,price){
     // price / slices

     var costPerSlices = price/slices;
//console.log("Test per slice");
     //round to 2 decimal
     costPerSlices = costPerSlices.toFixed(2);
     return costPerSlices;

 }