/*******************************************************
                      LINKED LISTS
  data structure that stores nodes that contain data
  and a refernence(pointer) to next node (singly linked)
 doubly linked - same but points to node before and after it
*******************************************************/

// BIG O REFERENCE:
// PREPEND - O(1) -- add to beginning
// APPEND -  O(1) -- add to end
// LOOKUP-  O(n)  -- traversal
// INSERT - O(n)
// DELETE - O(n)


// example
//10 --> 5 --> 16 --> null

let myLinkedList = {
  // first item in linked list
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
}

// creating a class for above code
class LinkedList {
  // creates head or very first node
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    //this is optional
    this.length = 1
  }
  append(value) {
    //creates new node with properies in constructor
    const newNode = {
      value: value,
      next: null
    }
    // graps the tail and the pointer of the tail and points to new created node
    this.tail.next = newNode
    // the tail is now going to equal the new node
    this.tail = newNode
    this.length++
    return this
  }
}

const myLinkedlist = new LinkedList(10)
myLinkedlist.append(5)
myLinkedlist.append(16)
console.log(myLinkedlist)

// outputs: 
/* LinkedList {
head: { value: 10, next: { value: 5, next: [Object] } },
tail: { value: 16, next: null },
length: 3
}
*/