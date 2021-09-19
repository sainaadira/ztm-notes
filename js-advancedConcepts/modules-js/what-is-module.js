/*********************************************************************/
/*                     MODULE
 programs: a way for us to modify data and organizing variables
 the way we structure data should be the most important part of the program

 */
/**********************************************************************/
/* example:
working on one function at a time and only think about that one function
 downside: without talking to other functions or other pieces of data outside of ourselves (functions), we cant really write programs

 need a way to share data between different functions
 you'd need to move the piece of data that we need up the scope chain to a parent to that can share a piece of data with its childen

 problem: if you have to keep extending and adding variables to the global scope
 tight coupling: everything is coneected tightly so if you modified object, it could affect other functions - a lot of things dependent on one another

 and polluting the global name space
 */

let user = {}
function signin(user) {
  let textfield = 'hahah'

}

function isHuman(user) {

}

// andrei's example:

var harry = 'potter'
var voldemort = 'He who must not be named'
function fight(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}

fight(harry, voldemort)