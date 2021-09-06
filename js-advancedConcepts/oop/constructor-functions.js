/*********************************************************** */
/* CONSTRUCTOR FUNCTIONS
 -- constructing a new elf (object)

using the new keyword
- auomatically returns the object for us and creates the elf constructor
-- runs the code, constructs the elf function and now we have access to peter and sam

-- any function using the 'new' key word is creating constructor functions. you invke them by using the 'new' keyword

'this' is now pointing to the object calling it: ie peter + sam


problem with this code: prototype is weird and not understandable

*/
/**************************************************************/




const Elf = (name, weapon) => {
  this.name = name
  this.weapon = weapon

}

// prototype: property that gets created with any new function. with constructor functions, prototype is useful 

// using the function keyword bc it is dynamically scoped so this would refer to the object calling it. if you were to use an arrow function, it wont work because () => {} is lexically scoped: this is defined based on where they're written. 

// adding the attack method on the prototype for the elf function
Elf.prototype.attack = function () {
  return 'attack with ' + this.weapon
}

Elf.prototype.build = function () {
  return 'attack with ' + this.weapon
}

const peter = new Elf('Peter', 'stones')
peter.attack() // attack with stones

const sam = new Elf('Sam', 'fire')
sam.attack() // attack with fire
