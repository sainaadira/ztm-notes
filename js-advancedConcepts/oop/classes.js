// ES6 Classes
/* class is creating a blueprint that you want the elf to be like
instance happens when you call the class and create an object out of the that class

ex: peter is an instance of elf

instance of: creating an instance of a class 
'this' + 'new' keyword - instantiating an instance of a class
*/

class Elf {
  constructor(name, weapon) {
    // keeps objects dynamic and you can add different names and weapons
    this.name = name
    this.weapon = weapon
  }
  // adding a method outside of the contructor function is because the method is shared by all instances of the class
  attack() {
    return 'attack with ' + this.weapon
  }
}

const peter = new Elf('Peter', 'stones')
peter.attack() // attack with stones

const sam = new Elf('Sam', 'fire')
sam.attack() // attack with fire
