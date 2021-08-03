
/*******************************************************
                 HASH TABLES (MAP)(object)
             in a map all keys are unique.
*******************************************************/

// BIG O REFERENCE:
// INSERT - O(1)
// LOOKUP - O(1) WORST CASE O(n) - hash collisions
// DELETE - O(1)
// SEARCH - O(1)


//Google Question:
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//brute force: O(n^2)
function firstRecurringCharacter(input) {
  let len = input.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined
}

//using hash map to optimize above code: O(n)
const firstRecurringCharacter2 = input => {
  let map = {} // O(n) space for keeping track of all items 
  let length = input.length
  for (let i = 0; i < length; i++) {
    if (map[input[i]]) {
      return input[i]
    } else {
      map[input[i]] = true
    }
  }
  return undefined
}



// example of hash table built from scratch
// source: andrei neagoie
class HashTable {
  constructor(size) {
    // this is the size of our data: 50
    this.data = new Array(size);
    // this.data = [];
  }
  // hash function: underscore represents private property
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    // represents where you want to store the information
    // store the data in this address space that is created by hash function
    let address = this._hash(key);
    // check if the data doesnt exist in the address (to avoid hash collisions)
    if (!this.data[address]) {
      // return that data as an array
      this.data[address] = [];
    }
    // add that new data into the address space and push the key and value
    this.data[address].push([key, value]);
    // return the data
    return this.data;
  }
  // this gets individual keys O(n) -- you need to loop through entire size of memory space to find the keys. if you need to use this method reconsider using objects.
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')