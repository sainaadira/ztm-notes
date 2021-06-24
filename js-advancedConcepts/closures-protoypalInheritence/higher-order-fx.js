/*****************************************************
                HIGHER ORDER FUNCTIONS
     functions that can take in functions as an argument
     or can return a function as a reult
why are they useful:
 *****************************************************/

//1. function without params
//example: creating a system for a company and letting users login
// this code is not dry or flexible because it is repeated

function letAdamLogin() {
  let arr = []
  for (let i = 0; i < 10000000; i++) {
    arr.push(i)
  }
  return 'Access granted to Adam'
}
letAdamLogin()
// outputs: 'Access granted to Adam with a long delay'

function letAvaLogin() {
  let arr = []
  for (let i = 0; i < 10000000; i++) {
    arr.push(i)
  }
  return 'Access granted to Ava'
}
letAvaLogin()

//2. a function that accepts parameters

// const giveAccessTo = name => 'Access granted to ' + name
function letUserLogin(user) {
  let arr = []
  for (let i = 0; i < 10000000; i++) { // we now tell the function what data to use when called. when you invoke the function it defines which data to use.
    arr.push(i)
  }
  return giveAccessTo(user)
}
// instead of defining ava/adam inside of the function
// you can define that info later when function is invoked
letUserLogin('adam')
// prints: access granted to adam

// but what if you had an admin login??
// there is a different loop/ permission process from userLogin
function letAdminLogin(admin) {
  let arr = []
  for (let i = 0; i < 500000; i++) {
    arr.push(i)
  }
  return giveAccessTo(admin)
}


// higher order function
const giveAccessTo = name => 'Access granted to ' + name
// verify param: number
const authenticate = verify => {
  let arr = []
  // loop though verification time
  for (let i = 0; i < verify; i++) {
    arr.push(i)
  }
  return true
}
// takes in a persona and function as a param
// conditionally checks if the level of the person is admin or user
// depending on level, return fn with time (used for verify) to process login
// returns function (giveAccessTo(person.name))
// person param from letPerson // name param from letPerson invocation with level + name property
const letPerson = (person, fn) => {
  if (person.level === 'admin') {
    fn(500000)
  } else if (person.level === 'user') {
    fn(10000000)
  }
  return giveAccessTo(person.name)
}

letPerson({
  level: 'user',
  name: 'Tim'
}, authenticate
)


// another example:
const multiplyBy = (num1) => {
  return (num2) => {
    return num1 * num2
  }
}
const byTwo = multiplyBy(2)
byTwo(3) // 6
byTwo(10) // 20

// clean one-liner
const multiplyBy = (num1) => (num2) => num1 * num2

multiplyBy(2)(6) // 12



