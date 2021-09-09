/*****************************************************************/
/*                     pure functions

 returns the same output given its input
function can not have side effects (cannot modify anything outside itself

  it makes functions easy to test, compose and it avoids a lot of bugs
  because there are no mutations and no shared state

  a perfect function should:
  - do one task only
  - should have a return statement, when given an input should expect an output
  - should be pure: immutable and no shared state
  - should be composeable and predictable
*/
/*****************************************************************/

let array = [1, 2, 3]

function arrPop(array) {
  return array.pop()
}

function arrPop2(array) {
  return array.forEach(item => {
    array.push(1)
  })
}

console.log(arrPop(array)) // prints: 3
console.log(array) // prints [1 , 2, 1, 1] - for arrPop2

/* this example is an example of side effects
it mutates and modifies array that live outside of arrPop in the global object
reusing shared state (gloabl variable)
can interact with anything
order of function calls matter and that can cause a lot of bugs

so how can we make this code have no side effects?......


*/

let array = [1, 2, 3]

function removeLastItem(arr) {
  //... you create a new array inside the function then copy from global arr
  const newArr = [...arr]
  newArr.pop()
  return newArr
}

function multiplyBy2(arr) {
  const newArr = [...arr]
  return newArr.map(el => el * 2)
}

const arr2 = removeLastItem(array)
const arr3 = multiplyBy2(array)
console.log(array, arr2, arr3) // prints: [ 1, 2, 3 ] [ 1, 2 ] [ 2, 4, 6 ]

/* these functions are created without side effects because you can modify the array within the function without modifying anything in the outside world (ie array globally delcared) */



/* a function that does have side effects 
tricky - but it does affect the window because you are logging 'hi' using the browser
to log to the browser

it is modifying something outside of itself

*/

function a() {
  console.log('hi')
}