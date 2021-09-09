/*****************************************************************/
//                         key terms

// impotence, imperative vs declarative, currying,  higer order functions compose & pipe, arity
/*****************************************************************/

/*
imdepotence - function that always returns what you expect it to 
for example, function below will always return a number between 0-1

another example is deleting a user from a database - if you keep calling function to delete that user, you'll get the same empty result

api/http get requests - api call given some param will always return same results even though you are communiating with the outside world.
 */

function notGood(num) {
  return Math.random(num)
}
notGood()


/*
imperative vs declarative

IMPERATIVE- code that tells the machine what to do and how to do it
DELCARATIVE- code tells the machine what to do and what should happen
doesn't tell computer how to do things

a computer is better at being imperative
humans are better at being declarative

 */
// imperative (way more steps)
// delcare varable, loop 1000x increment by 1 then log i
for (let i = 0; i < 1000; i++) {
  console.log(i)
}

// delarative - dont tell program what to do and how to do it
// for each item, console.log(item)
[1, 2, 3, 4].forEach(item => {
  console.log(item)
})



/*
immutability - not changing the state or data
making copies of the state and returning a new state every time

we can change thigns inside of functions but you dont want to change things in the outside world
 */

const obj = { name: 'sai' }

const clone = (obj) => {
  return { ...obj } // this is pure because i am just cloning the object
}
obj.name = 'saad' // updating the name: name gets changed: mutating the state or data in program

// if i wanted to change the name: create a function to do so
const updateName = (obj) => {
  const obj2 = { ...obj }
  obj2.name = 'saad'
  return obj2
}

const updateObj = updateName(obj)
console.log(obj, updateObj) // prints: { name: 'sai' } { name: 'saad' }


/*
higher order functions - functions can take in function as arguments and return other functions as a result (callback)

 */

const hof = () => () => 5
hof()() // prints 5

const hof2 = (fn) => fn(5)
// a function that takes a function as a parameter
hof2(function a(x) { return x })



/*
closures - mechanism for containing state
in js you create a closure when a function accesses a variable defined outside of its immediate function scope

even though initial closure function was called + executed,
because of closure, the increment function remembers the variable delcared in the outer scope
variable used by the inner function will be available to it even after the outer function has finished running

closures only make a function impure if we modified the closed over variable

 */

const closure = function () {
  let count = 0
  return function increment() {
    count++
    return count
  }
}
const addCount = closure()
addCount()
addCount()
addCount()

/* closures only make a function impure if we modified the closed over variable

althouth we're not modifiying state, we still have access to data outside of ourselves
as long as we dont modify or mutate data. 

created private variables: as a user, i cannot modify the counter variable
*/

const closure = function () {
  let counter = 55
  return function getCounter() {
    return counter
  }
}


/* currying: technique of translating evaluation of a function that takes multiple arguments
into evaluating a sequence of functions with a single argument

take a function that take multiple parameter
using currying, modify it to take one parameter at a time

why is this useful?
i can create multiple utility functions from this curried function
*/

const multiply = (a, b, c) => a * b * c
// because of closures, we have acces inside of the b function to the a variable
const curriedMultiply = (a) => (b) => (c) => a * b * c
curriedMultiply(3)(4)(10)// prints: 120 -- giving the function one parameter at a time




/* partial application: not to be confused with currying
producing a function with a smaller number of parameters

taking a function, applying some of its arguments into the function
so it remembers those params
uses closures to later be called with all the rest of the arguments

partial application says it wants to apply a portion of the parameters
ex: a
and next time i call the function, i want to apply the rest of the arguments

call the function once
on the 2nd call, i expect all the arguments
*/

const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(4, 10)

/* memoization ~~ caching -specific form of caching that involces caching the return value of a function based on params
remember a solution to a subproblem so you dont have to reaclulate it

caching: is a way to store values to use them later on and a way for us to speed up programs by holding data in easily acessible box

if params of function doesnt change then its memoized - uses the cache and it will return cached version of the function
if param changes, it will calulate both times


*/

function addTo80(n) {
  console.log('long time')
  return n + 80
}
addTo80(5) // prints: 85
addTo80(5)
addTo80(5)

let cache = {}
let memoizedAddTo80 = (n) => {
  if (n in cache) {
    return cache[n]
  } else {
    console.log('long time')
    cache[n] = n + 80
  }
}
memoizedAddTo80(5)

// using a closure: you are able to access cache inside of child function
let memoizedAddTo802 = () => {
  let cache = {}
  return (n) => {
    if (n in cache) {
      return cache[n]
    } else {
      console.log('long time')
      cache[n] = n + 80
    }
  }
}

const memoized = memoizedAddTo802()
console.log('1', memoized(5))
console.log('2', memoized(5))

/* compose: any sort of data transformation done should be obvious
like a conveyer belt: data => fn => data => fn => data
sysyem designed principle that deals with components how we can compose diffeent components of a factory
provices components that can be selected and assembled ind different variations to get the desired outcome

& pipe - the same as compose but goes from left to right*/

//compose

//-50 * 3 and get absolute of (make it positive)

const compose = (f, g) => (data) => f(g(data))
const multiplyByThree = num => num * 3
const makePos = num => Math.abs(num)

const multiplyBy3MakePos = compose(multiplyByThree, makePos)

multiplyBy3MakePos(50) // prints 150


// pipe
const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))
const multiplyByThree = num => num * 3
const makePos = num => Math.abs(num)

const multiplyBy3MakePos = compose(multiplyByThree, makePos)

multiplyBy3MakePos(50) // prints 150


fn1(fn2(fn3(50)))
compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)


/*
arity- number of arguments a function takes
a good idea that a fewer number of params in a function, the easier it is to use that function

it makes functions more flexible, can use things like currying
can use functions in compose and pipe
the more params a function has, the harder it is to compose it with other functions
*/


