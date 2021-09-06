/* ways to manipulate 'this' keyword */

/*'new' binding used with constructor functions

allows you to assign this to the object instatiated (person, Person)

*/

function Person(name, age) {
  this.name = name
  this.age = age
}

const person1 = new Person('xavier', 55)
person1


/* implicit binding */

const person = {
  name: 'Karina',
  age: 40,
  hi() {
    console.log(`hi ${this.name}!`)
  }
}

console.log(person.hi()) // prints 'hi, Karina!'


/* explicit binding  - when we dictate what the 'this' keyword should refer to 

using bind, call or apply to explicitly tell program that you want it to be window

*/

const person3 = {
  name: 'Karina',
  age: 40,
  hi: function () {
    console.log('hi' + this.setTimeout)
  }.bind(window)
}
person3.hi() //    prints: hifunction setTimeout() { [native code] }

/* arrow funcitons - lexical scoping
wherever you bind the function, that's what 'this' binds to

if you used the function keyword, 'this' would refer to the window object
and not the person4 obect

*/

const person4 = {
  name: 'Karina',
  age: 40,
  hi: function () {
    var inner = () => {
      console.log(`hi ${this.name}!`)
    }
    return inner()
  }
}
person4.hi() // prints: hi, Karina!