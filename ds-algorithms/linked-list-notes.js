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
//1--> 10 --> 99 --> 5 --> 16 --> null

// let myLinkedList = {
//   // first item in linked list
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }


// ^^^ creating a class for above code ^^


// to keep code dry you can use a node class
// // that creates node for you and instantiate that class
// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }
// use it like this: 
// const newNode = new Node(value)


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
  prepend(value) {
    // creating an empty node with the value
    const newNode = {
      value: value,
      next: null
    }
    // new node with pointer to next node is now the head node
    newNode.next = this.head
    // the head is equal to newly created node (firstNode)
    this.head = newNode
    // increment length by one
    this.length++
    // return linked list
    return this
  }

  printList() {
    const array = []
    // current node is the head node in the list
    let currentNode = this.head
    //while loop: while condition is happening, run below commands
    // as long as there is a current node that doesnt point to null
    while (currentNode !== null) {
      // add to array the value of the current node
      array.push(currentNode.value)
      // then update the current node to equal next until null is reached
      currentNode = currentNode.next
    }
    return array
  }
  insert(index, value) {
    //  make sure its an index is a value 
    // that is understood: if index is greater than or equal to length
    if (index >= this.length) {
      // append value to the end of the list
      return this.append(value)
    }
    // creating new node
    const newNode = {
      value: value,
      next: null
    }
    // first node: new method that gets last index 
    const leaderNode = this.traverseToIndex(index - 1)
    //grabs the next item in list: makes sure connections work properly -- 5 is referenced in holding pointer variable
    const holdingPointer = leaderNode.next
    // leader can now point to the new node rend remove reference to 5
    leaderNode.next = newNode
    // new node now equals 5
    newNode.next = holdingPointer
    // added to the list increments by 1
    this.length++
    // print the list
    return this.printList()
  }
  traverseToIndex(index) {
    let counter = 0
    // current node is the head
    let currentNode = this.head
    // while counter does not equal the index
    // keep traversing from head til counter is equal to the index
    while (counter !== index) {
      // current node moves over to the right
      currentNode = currentNode.next
      // increment counter one by one
      counter++
    }
    // return current node
    return currentNode
  }
}

const myLinkedlist = new LinkedList(10)
myLinkedlist.append(5)
myLinkedlist.append(16)
myLinkedlist.prepend(1)
myLinkedlist.insert(2, 99)
myLinkedlist.printList()


// append outputs: 
/* LinkedList {
head: { value: 10, next: { value: 5, next: [Object] } },
tail: { value: 16, next: null },
length: 3
}
*/

/* prepend output:
LinkedList {
  head: { value: 1, next: { value: 10, next: [Object] } },
  tail: { value: 16, next: null },
  length: 4
}
 */

/* insert output */
//[1, 10, 99, 5, 16]

