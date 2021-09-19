/*********************************************************************/
/*                        ES6 Modules
reuable code and functions and allows for maintainable
divide code into smaller chunks
can compose different modules together to add different functionality
using import and exporting modules
organize code better

 */
/**********************************************************************/
var harry = 'potter'
var voldemort = 'He who must not be named'

function jump() { }

export function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}