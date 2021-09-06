/************************************************** */

/* OBJECT.CREATE()
 -- this is not the most used way of doing this **
 to reference: use factory-functions.js
 -- instead of having to manually attach methods to each object
 you can use object.create() which copies methods to newly created objects


 what it does: creates a link between the elf functions and the newElf that was just created via prototypal inheritance
 Object.create() - creates the prototype chain

*/
/******************************************************/


const elfFunctionStore = {
  attack() {
    return 'attack with ' + this.weapon
  }
}

const createElf = (name, weapon) => {
  let newElf = Object.create(elfFunctionStore)
  newName = name
  newWeapon = weapon
  return newElf
}


const peter = createElf('Peter', 'stones')
peter.attack() // attack with stones

const sam = createElf('Sam', 'fire')
sam.attack() // attack with fire