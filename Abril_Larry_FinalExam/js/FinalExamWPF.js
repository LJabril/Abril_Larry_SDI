
 /*
Larry Abril
3/28/2015
Section 00
Final Exam
 */


alert("Just testing!");

 //prompt the user for the cost of an item
 var itemCost = prompt("I will need some information about your new item.\nLet's start with the cost.\nHow much cost your new item?");

 //validation
 while (itemCost === "" || isNaN(itemCost)) {
     //re-prompt
     itemCost = prompt("Please do not leave blank and use only numbers.\nHow much cost your new item?");
 }
 //parseInt
 itemCost = parseInt(itemCost);

 //prompt the user for the discount %
 var discount = prompt("How much is the discount percent?");

 //validation
 while ( discount <0 || discount >100 || discount === "" || isNaN(discount)) {
     //re-prompt
     discount = prompt("Please do not leave blank and use only numbers in between 0 up to 100.\nHow much is the discount percent?");
 }

 //parseInt
 discount = parseInt(discount);



 //function to calculate the discounted cost of an product
 function totalAmount (c,d) {
     var discountedPrice = itemCost * (discount/100);
     var totalPrice = c - discountedPrice;
     return totalPrice;
 }


 //function call
 var resultTotalAmount = totalAmount(itemCost,discount);


 //console.log out
 console.log("The final cost of an item that cost $"+ itemCost+" with a discount of "+ discount+"% is $"+resultTotalAmount +".");



 /*
 TEST AREA
 Item cost               500
 discount   *            25%
 -----------------------
 Total discounted       125


 Item price             500
 Total discounted     - 125
 -----------------------
 Total Amount to pay    375



  TEST AREA
  Item cost               100
  discount   *            10%
  -----------------------
  Total discounted         10


  Item price             100
  Total discounted     -  10
  -----------------------
  Total Amount to pay     90

  */