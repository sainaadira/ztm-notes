/*
js is dynamically typed language
allows you to declare a variable without specifiying data type

pros: 
spend less time debugging by tracking data type and more time can be spent on bugs and logic
you can be more flexible and write software faster


*/

var a = 100




/*
staticallly typed:

 you have to specify the type of variable before declaring it
example:
int  a;
a = 100

 pros of static typed:
-- self- documentation: you know exactly what data type to use as params
-- because of this feature, text editor it helps with auto completion
--you'll get less bugs in prodution
 if this fails  fucntion below during compile time, those bugs are caught early

 cons:
 more complex code
 takes more time to learn
 have to keep track of unit testing
 you'll have slower devopment process because of checking to make sure data type is correct.


fuction sum(a: number, b: number){
  return a + b
 }
  */


/**************************************
    STRONGLY VS WEAKLY TYPED LANGUAGE
/**************************************/

/*
 STRONG

 using python
 
 var = 'booya'
 var + 17 
 would throw an err bc you cannot add a string to a number
*/



//WEAKLY TRYPED
var a = 'booya'
a + 17
// 'booya17' // concatenates number inside of string