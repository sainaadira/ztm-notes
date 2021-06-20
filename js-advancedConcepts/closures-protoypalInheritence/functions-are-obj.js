/*
functions are objects

a review: 

                 object
               /       \
        array []      function()

when you invoke a function you get acces to 'this' and arguments object (better to use spread vs rest parameter)

when we define functions the compiler looks at code, lexically and it determines which variables are accessible in the variable enviornment and it also adds scope chains

functions are a special type of object that have code, name and properties. they are callable and can be passed around like objects

sumFunc()
code() - when invoeked, code inside is read and executed
name(optional) - functions can be named or anonymous
properties: call(), bind(), apply()
 */



// ways of creating and invoking functions

function a() {
  return a
}
a()  // calls or invokes function

// as a method: a function inside of an object

const obj = {
  two() {
    return two
  }
}
obj.two() // this keyword is updated to the object, not window


// using call(), apply()
function three() {
  return 3
}
three.call()

// you can add properties to sayHello
const sayHello = () => {
  console.log('hello!')
}
sayHello.spanish = 'hola!'

/*
what happens under the hood is js creates a special object
called a callable object

viaual pseudocode 

const specialObj = {
  spanish: 'hola!'
  name: sayHello
  () : console.log('hola!')
}

*/


// function constructor: not seen very often
const four = new Function('num', 'return num')
four(4)
// takes param and the second param is the function body



