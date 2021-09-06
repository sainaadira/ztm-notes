/* 
naive approach: 
this approach is naive because you have to constantly copy and paste the objects if you want to add more elfs objects

this is a step closer to OOP because you have ecapsulation
where data is within the object

- also have state : data within the object
- and methods: acting on that state and you can interact and modify the methods


*/
const elf = {
  // state: data within the object
  name: 'orwell',
  weapon: 'bow',
  // methods: acting on that state. methods can interact and modify 
  attack() {
    return 'attack with ' + elf.weapon
  }
}


const elf2 = {
  name: 'sally',
  weapon: 'bow',
  attack() {
    return 'attack with ' + elf.weapon
  }
}

elf.name  // orwell
elf.attack() // attack with bow



/********************************************** */
/*          FACTORY FUNCTIONS
functions that act like factories and create objects for you 

 
*/

/*************************************************/

const createElf = (name, weapon) => {

  return {
    name,
    weapon,
    attack() {
      return 'attack with ' + weapon
    }
  }
}

const peter = createElf('Peter', 'stones')
peter.attack() // attack with stones

const sam = createElf('Sam', 'fire')
sam.attack() // attack with fire