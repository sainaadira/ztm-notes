/*****************************************************************/
/*                           recursion
 a function that refers to itself inside of a function

 useful for: tasks that have repeated subtasks to do
 - searching and sorting algorithms
 -traversing a tree / dom traversal
 
 downside:
 stackoverflow- can occur when you have recursion without a base caseand cant stop the call


 1) identify base case
 2) identify recursive case
 3) get closer and return when needed
    return base case and recursive case
 */

/*****************************************************************/

// ex
let counter = 0
const inception = () => {
  if (counter > 3) {
    return 'done'
  } else {
    counter++
    return inception()
  }
}


// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 2)
    return 2
  number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
  let answer = 1
  // starting at 2 to avoid extra loops
  for (let i = 2; i <= number; i++) {
    answer *= i
  }
  return answer
}