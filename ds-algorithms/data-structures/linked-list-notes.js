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

  remove(index) {
    // grab the leader
    const leaderNode = this.traverseToIndex(index - 1)
    // reference to the unwanted node
    const nodeToDelete = leaderNode.next
    // leader node is now the node to be deleted
    leaderNode.next = nodeToDelete.next
    // decrement length by 1 since item is being removed
    this.length--
    return this.printList()
  }
}

const myLinkedlist = new LinkedList(10)
myLinkedlist.append(5)
myLinkedlist.append(16)
myLinkedlist.prepend(1)
myLinkedlist.insert(2, 99)
myLinkedlist.remove(2)
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

/* remove output */
//[1, 10, 5, 16]


/*******************************************************
                  DOUBLY LINKED LISTS
      allows for reverse list traversal but downside it
      uses an additional block of memory because there is
      datum that holds reference to previous node
*******************************************************/

class DoublyLinkedList {
  // creates head or very first node
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      // to make it doubly linked, reference to previous node
      previous: null
    }
    this.tail = this.head
    //this is optional
    this.length = 1
  }
  append(value) {
    //creates new node with properies in constructor
    // need to add previus property

    const newNode = {
      value: value,
      next: null,
      previous: null
    }
    // previous node now equals to tail
    newNode.previous = this.tail
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
      next: null,
      previous: null
    }
    newNode.previous = this.head
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
      next: null,
      previous: null
    }

    // reference arr [1, 10, 5, 16] => [1,10, 99, 5, 16]
    // first node: new method that gets last index 
    const leaderNode = this.traverseToIndex(index - 1)
    //grabs the next item in list: makes sure connections work properly -- 5 is references the number that comes after the leader
    const follower = leaderNode.next
    // leaderNode references 99 to be inserted
    leaderNode.next = newNode
    // making sure previous node = 10
    newNode.previous = leader
    // new node now equals 5 because it followed after 10s
    newNode.next = follower
    // making sure 5 has a previous value that points to newNode = 99
    follower.previous = newNode
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

  remove(index) {
    // grab the leader
    const leaderNode = this.traverseToIndex(index - 1)
    // reference to the unwanted node
    const nodeToDelete = leaderNode.next
    // follower node now = node to  be deleted
    const follower = nodeToDelete.next
    // leader node is now the node to be deleted
    leaderNode.next = follower
    follower.previous = leaderNode
    this.length--
    return this
  }
}


const myLinkedlist = new DoublyLinkedList(10)
myLinkedlist.append(5)
myLinkedlist.append(16)
myLinkedlist.prepend(1)
myLinkedlist.insert(1, 99)
myLinkedlist.remove(2)
myLinkedlist.printList()

/*******************************************************
            REVERSE A SINGLY LINKED LIST
*******************************************************/


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

  remove(index) {
    // grab the leader
    const leaderNode = this.traverseToIndex(index - 1)
    // reference to the unwanted node
    const nodeToDelete = leaderNode.next
    // leader node is now the node to be deleted
    leaderNode.next = nodeToDelete.next
    // decrement length by 1 since item is being removed
    this.length--
    return this.printList()
  }
  // reference arr: [ 1, 10, 16, 88 ]
  reverse() {
    // checking to see if there is more than one item in the list
    if (!this.head.next) {
      // return the head node
      return this.head
    }
    // first node is the head (1)
    let first = this.head
    let tail = this.head
    // second node im the list (10)
    let second = first.next
    // as long as this second node exists and not null
    while (second) {
      // create temp variable that holds the third element (16)
      const temp = second.next
      // temp element points to the first
      second.next = first
      // first now ewuals the second element
      first = second
      // second equals the temp (third) element
      second = temp
    }
    // 1 now points to null
    this.head.next = null
    //head becomes 88
    this.head = first
    return this
  }
}

const myLinkedlist = new LinkedList(10)
myLinkedlist.append(5)
myLinkedlist.append(16)
myLinkedlist.prepend(1)
myLinkedlist.insert(2, 99)
myLinkedlist.insert(20, 88)
myLinkedlist.remove(2)
myLinkedlist.remove(2)
myLinkedlist.printList()
myLinkedlist.reverse()
