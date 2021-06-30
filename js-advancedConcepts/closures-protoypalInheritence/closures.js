/* CLOSURES 
a combination of a function and the lexical enviornment from which was declared
allows a function to acces variables from an enclosing or outer scope even after it leaves the scope in which it was declared.


have two important main benefits
 - memory efficient 
 - encapuslation (data privacy)
*/

// memory efficiency
const heavyDuty = (index) => {
  const bigArr = new Array(7000).fill('😊')
  console.log('created')
  // to access the index of bigArr
  return bigArr[index]
}
heavyDuty(688)
heavyDuty(688)
heavyDuty(688)

const getHeavyDuty = heavyDuty2()
heavyDuty(688)
heavyDuty(700)
heavyDuty(800)

// function that uses closures -- closures return a function
// changed to function declaration for housting
function heavyDuty2() {
  const bigArr = new Array(7000).fill('😊')
  console.log('created again')
  // returns a function that has a reference to bigArr
  return (index) => {
    return bigArr[index]
  }
}

// encapsulation
const makeNuclearButton = () => {
  // function launches nuclear BOB
  let timeWithoutDestruction = 0
  const passTime = () => timeWithoutDestruction++
  const totalPeaceTime = () => timeWithoutDestruction
  const launch = () => {
    timeWithoutDestruction - 1
    return '💥'
  }
  setInterval(passTime, 1000)

  return {
    // you want to hide this function so no one else in the outside world has access to it to 
    // launch: launch,
    totalPeaceTime: totalPeaceTime
  }
}

const ohno = makeNuclearButton()
ohno.totalPeaceTime()
ohno.totalPeaceTime()





//exercises: 
const callMeMaybe = () => {
  const callme = 'Hi!, I am here'
  setTimeout(() => {
    console.log(callme)
  }, 4000)
}
callMeMaybe()

const callMeMaybe = () => {
  setTimeout(() => {
    console.log(callme)
  }, 4000)
  const callme = 'Hi!, I am here'
  // even with variable defined after setTimeOut, the enclosing function sees that callme exists and will still run. does not care about hoisting (cannot hoist const variable anyway)
}
callMeMaybe()


// pov: you dont want initalize to be called a bunch of times, only want it to be called once
// how can this be done with closures? 
let view;
function initalize() {
  view = '🏔️'
  console.log('view has been set!')
}
initalize()
initalize()
initalize()
console.log(view)

// solution: use IFFES's
let view;
let viewImage = (function initalize() {
  let called = 0
  return () => {
    if (called > 0) {
      return
    } else {
      view = '🏔️'
      called++
      console.log('view has been set!')
    }
  }
})()
const startOnce = initalize()
startOnce()
console.log(view)


// last excercise

const arr = [1, 2, 3, 4]
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(`I am at index ${i}`)
  }, 3000)
}
/*
I am at index 4
I am at index 4
I am at index 4
I am at index 4
*/

// change var -> let 
// let allows for block scoping so that 'i' is scoped within setTimeOut()
const arr = [1, 2, 3, 4]
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(`I am at index ${arr[i]}`)
  }, 3000)
}
/* prints
I am at index 0
I am at index 1
I am at index 2
I am at index 3
 */

// if you could not use the let keyword, use closures with an IFFE
const arr = [1, 2, 3, 4]
for (var i = 0; i < arr.length; i++) {
  (function (closureI) {
    setTimeout(() => {
      console.log(`I am at index ${arr[closureI]}`)
    }, 3000)
  })(i)
}