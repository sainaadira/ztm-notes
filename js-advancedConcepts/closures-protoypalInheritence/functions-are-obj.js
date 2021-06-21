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



//functions are first class citizen's 

// functions can be assigned to variables and properties in objects
var stuff = () => { }

// you can pass functions as arguments
// passing a function as a parameter to another function
function a(anotherOne) {
  anotherOne()
}
a(() => { console.log('hello!') })

// you can return functions as values as other functions

function b() {
  return function c() {
    console.log(`hey, i'm function c`)
  }
}
b() // returns [Function: c]
b()() // running it again returns `hey, i'm function c`
// or you can assign function b to a variable and call that variable
var d = b()
d()


/* some things you want to watch out for in functions

be careful of initalizing inside of loops
when i = 0 - 4; function gets initalized

for(let i = 0; i < 5; i++){
 function a(){

  }
  a()
}

instead move function to the top to initalize function just once
and then you loop over it, you're executing it 4 times
 function a(){

  }


  for(let i = 0; i < 5; i++){
 a()
}

// another thing to look out for is when returning a parameter
it is best to have default parameters to solve edge case

function example(param = 5){
  return param
}
example() // prints 5

*/