/*********************************************************************/
/*                     MODULE PATTEERN
 you are able to make something available to the outside world
 using a public api by retruning it and attaching it to a variable
 exporting functions/variables
 and other modules can explicit say it wants to use a global variable so it makes code more clear about what you need from the global variable


 global scope
 module scope - used to share variables between different functions
               share things without having to pollute global scope
 function scope
 block scope (let/const)

 
 using an iffe you can create a functions cope that mimics a module scope
 you can wrap a js file using an iffe and everyhing inside of it will run because you are immediately invoking it and will only return what you need to a variable that will be accessible on the global scopes - only revealing one variable poluting the global name space with one variable and hidng everything else.

 main problems:
 still polluting the global namespace
 dont know all the dependencies making sure order of script tag are correct

 */
/**********************************************************************/
// iffe - what if you want 

var fightModule = (function () {
  // harry and voldemort are private variables
  var harry = 'potter'
  var voldemort = 'He who must not be named'

  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
  }
  // this is the public api, interface and only exporting this 
  // returning what you need: revealing module pattern
  return {
    fight: fight
  }

})()