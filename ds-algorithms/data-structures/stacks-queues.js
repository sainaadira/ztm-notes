/*******************************************************
                STACKS & QUEUES
  both a linear data structure

  Stack- LIFO (last in first out) => books
  lookup - O(n)
  push   - O(1)   push to top of stack
  pop    - O(1)   removes top of stack 
  peek   - O(1)  looks at top most element


 Queue- FIFO (first in, first out) => line of people
 lookup -  O(n)
 enqueue - O(1)   push to end of stack
 dequeue  - O(1)   removes first element
 peek   - O(1)  view last element in queue

*******************************************************/


// stacks - you can build with arrays or linked lists



// queues are better implemented with a linked list

//head              tail
//sai-- shika-- ty-- jane


/*
stack implemented with a linked list
reference list: 
Discord
Udemy
google */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top
  }
  push(value) {
    // create new node from node class
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      // hold reference to what was previously on top
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++
    return this
  }
  pop() {
    // if top does not exist
    if (!this.top) {
      return null
    }
    // this top and bottom are equal then set buttom node to null
    if (this.top === this.bottom) {
      this.bottom = null
    }
    this.top = this.top.next
    this.length--
    return this
  }
  //isEmpty
}


const myStack = new Stack();
myStack.peek()
myStack.push('google')



// stack implemented with an array
class Stack {
  constructor() {
    this.array = []
  }
  peek() {
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    this.array.pop()
    return this
  }

}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();




/*********************************/
//       QUEUE
/*********************************/


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first
  }
  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      // whatever is the last value of the line and next
      this.last.next = newNode
      // new node is now last
      this.last = newNode
    }
    this.length++
    return this
  }
  dequeue() {
    if (!this.first) {
      return null
    }
    if (this.first === this.last) {
      this.last = null
    }
    // would hold joy's name
    const holdingPointer = this.first
    this.first = this.first.next
    this.length--
    return this
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue('joy')
myQueue.enqueue('matt')
myQueue.enqueue('pavel')
myQueue.enqueue('samir')


//Joy
//Matt
//Pavel
//Samir



