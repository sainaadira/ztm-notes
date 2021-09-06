/************************************************** */

/* inheritance - a core aspect of oop (passing knowledge down)
inheritance doesn't acutally copy functionality or doesnt copy whats in character
it links up the prototype chian

ex: if a property does not exsit in the ogre class it it will look up ogre's super class
which is character - creating efficient linking using prototypal inheritance

*/
/******************************************************/


class Elf {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}

const fiona = new Elf('fiona', 'ninja stars')

/* once ive created ogre from copying fiona, i lose the protoypal chain
fiona is an instance of the elf class
ogre is not referencing the same place in memory.
ogre does not have access to attack method

how can you extend 'this?'
 */
const ogre = { ...fiona }
orgre      // prints: { name: 'fiona', weapon: 'ninja stars' }

/***************************************************************** */
// now to extend 'this' with subclassing using extends keyword

// extend: extends and sets the prototype of Elf and points it to Character and elf now hows a protype chain up to Character

// now that elf extends character (base class) and inherits the properties
// and methods of the character class

// 'hey, anytime you run an instance of elf like dolby, and it has a property that i dont have, go up to the character and tell if charcter has it
/***************************************************************** */

class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    // by calling super inside the constructor it says call the super class, 
    // it goes up and calls the constructore
    super(name, weapon)
    this.type = type
  }

}
const dolby = new Elf('dolby', 'cloth', 'house elf')
dolby.attack() // prints: 'attack with cloth'

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }
  makeFort() {
    return 'strongest fort in the world made'
  }

}

const shrek = new Ogre('shrek', 'club', 'green')
shrek  // prints: Ogre { name: 'shrek', weapon: 'club', color: 'green' }
shrek.makeFort() // prints: strongest fort in the world made


// exercise

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

class Queen extends Character {
  constructor(name, weapon, kind) {
    super(name, weapon)
    this.kind = kind
  }
  attack() {
    console.log(super.attack())
    return `I am ${this.name} of ${this.kind}, now bow down to me`
  }
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! 


