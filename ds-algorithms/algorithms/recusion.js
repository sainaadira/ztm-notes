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


/* 
 FACTORIAL
Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop 
*/

function findFactorialRecursive(number) {
  if (number === 2)
    return 2
  number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
  let answer = 1
  if (number === 2) {
    answer = 2
  }
  for (let i = 2; i <= number; i++) {
    answer *= i
  }
  return answer
}


/*
FIBONACCI 

Given a number N return the index value of the Fibonacci sequence, where the sequence is:

 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

For example: fibonacciRecursive(6) should return 8

*/

function fibonacciIterative(n) {
  // contains inital items of the sequence
  let arr = [0, 1]
  // start adding when index is @ 2 because already accounted for 0 and 1
  for (let i = 2; i < n + 1; i++) {
    // summing the previous 2 numbers and pushing into arr
    arr.push(arr[i - 2] + arr[i - 1])
  }
  // returns array and item of n
  return arr[n]
}
fibonacciIterative(3);

function fibonacciRecursive(n) {  // O(2^N - not a good time complexity at all)
  //  base case: check to see if n is less than 2
  if (n < 2) {
    // return the index of where n is (1)
    return n
  }
  // then return the function n-1 + n -1 bc the answer is always first & second before N
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

fibonacciRecursive(3)



// string reversal recursive vs iterative

//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  let arr = []
  let word = str.split('').reverse()

  for (let i = 0; i < word.length; i++) {
    arr.push(word[i])
  }
  return arr.join('')

}

reverseString('yoyo mastery')
//should return: 'yretsam oyoy'

const reverseStringRecursive = str => {
  if (str === '') {
    return ''
  }
  return reverseStringRecursive(str.substr(1)) + str.charAt(0)
}

reverseStringRecursive('yoyo mastery')
//should return: 'yretsam oyoy'