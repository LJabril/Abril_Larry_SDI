
 /*
Larry Abril
3/24/2015
Section 00
Function Assignment
 */


//alert("Just testing!");

 //BASIC Function
 //calc the total of chair in the classroom
 function totalChair (ch,t){
     //find total of chair   totalChair = how many ch per each table * how many tables in the classroom
     var chairT = ch*t;
     return chairT;

 }

 //ANONYMOUS Function
 //find how many chairs are open
 var totalChairOpen = function (ch,t,s){
     var chairOpen = (ch*t)-s;
     return chairOpen;
 };

 // Prompt the user for chairs, tables and students.
 //create variables for CHAIR

var chair = prompt("We are going to find out how many chairs are in the classroom.\nHow many chairs are per each table.");
 //validation
 while (chair === "" || isNaN(chair)){
     //re-prompt the user to make sure its not blank and its a number
     chair = prompt("Please do not leave blank and only use numbers.\nHow many chairs are per table?");
 }

 //parseInt
 chair = parseInt(chair);



 //create variables for Table

 var table = prompt("How many tables are in the classroom.");
 //validation
 while (table === "" || isNaN(table)){
     //re-prompt the user to make sure its not blank and its a number
     table = prompt("Please do not leave blank and only use numbers.\nHow many table are in the classroom?");
 }

 //parseInt
 table = parseInt(table);




 //create variables for STUDENTS

 var students = prompt("How many students are in the classroom?.");
 //validation
 while (students === "" || isNaN(students)){
     //re-prompt the user to make sure its not blank and its a number
     students = prompt("Please do not leave blank and only use numbers.\nHow many students are in the classroom?");
 }

 //parseInt
 students = parseInt(students);



 //Function call
 var resultTotalChairs =totalChair(chair,table);
 var resultChairsOpen = totalChairOpen(chair,table,students);


 //COMBINED console.log out
 console.log("The total of chair in the classroom is " + resultTotalChairs+ " and the total chairs that are still open is "+resultChairsOpen + ".");






 //TEST AREA
 /*
 To find how many chairs
 chairs per table    3
 total of tables     10 (* Multiply)
 -----------------------
 Total of chairs     30

 To find how many chairs are open
 chairs per table    3
 total of tables     10 (* Multiply)
 -----------------------
 Total of chairs     30
 total of students   15  (- subtract from the total of chairs)
 -----------------------
 Total of chairs open 15


  To find how many chairs
  chairs per table    8
  total of tables     8 (* Multiply)
  -----------------------
  Total of chairs     64

  To find how many chairs are open
  chairs per table    8
  total of tables     8 (* Multiply)
  -----------------------
  Total of chairs     64
  total of students   50  (- subtract from the total of chairs)
  -----------------------
  Total of chairs open 14

  */