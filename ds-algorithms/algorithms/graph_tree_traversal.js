/************************************************ */
/*        BREADTH FIRST SEARCH
  starts with the root node and moves from
  left to right across every level

  * uses additional memory because it it is necessary to track
  alll of the node's children on a given level in order

 rule of thumb:
 if you have addtional information on the location of the target node (and the node is in upper level of tree) BDF is best to use

   */
/************************************************ */

/*     example
         9 
     4       20
  1   6    15  170

using BFS the list would look like this  */
[9, 4, 20, 1, 6, 15, 170]



class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root
    let list = [] // stores numbers in order of BFS
    let queue = [] // keeps track of level to access chidren
    queue.push(currentNode)
    // within the while loop it will add 9. 4,20 then loop again, shift, remove from queue and repeat the process until 1,6,15,170 are added to the list as well.
    while (queue.length > 0) {
      currentNode = queue.shift() // removes first element in queue
      list.push(currentNode.value) // first answer in list: 9
      if (currentNode.left) {
        queue.push(currentNode.left) // added 4 to the queue
      }
      if (currentNode.right) {
        queue.push(currentNode.right) // added 20 to the queue
      }
    }
    return list
  }

  breadthFirstSearchR(queue, list) {
    // need to create a base case
    // if the length of the queue is 0, return list
    if (!queue.length) {
      return list
    }
    let currentNode = queue.shift()
    list.push(currentNode.value)
    if (currentNode.left) {
      queue.push(currentNode.left) // added 4 to the queue
    }
    if (currentNode.right) {
      queue.push(currentNode.right) // added 20 to the queue
    }
    return this.breadthFirstSearchR(queue, list)
  }

  DFSInOrder() {
    return traverseInOrder(this.root, [])
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, [])
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, [])
  }
}

const traverseInOrder = (node, list) => {
  // if there is a left child node,
  if (node.left) {
    // traverse all the way down the branch until there are no more children
    traverseInOrder(node.left, list)
  }
  // once there are no more, push the value to the list
  list.push(node.value)
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list
}


const traversePreOrder = (node, list) => {
  // pushes the parent (9) into the list first
  list.push(node.value)
  if (node.left) {
    // traverse all the way down the branch until there are no more children
    traversePreOrder(node.left, list)
  }

  if (node.right) {
    traversePreOrder(node.right, list)
  }
  return list
}

const traversePostOrder = (node, list) => {

  list.push(node.value)
  if (node.left) {
    traversePostOrder(node.left, list)
  }

  if (node.right) {
    traversePostOrder(node.right, list)
  }
  list.push(node.value)
  return list
}
//     9
//  4     20
//1  6  15  170

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.breadthFirstSearch()
tree.breadthFirstSearchR([tree.root], [])


function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}


/************************************************ */
/*        DEPTH FIRST SEARCH
  starts at root node and follows down one branch of the tree down
  as many levels as posssible until target node is found or until it reaches the end.
  when  a search can't go on any futher, it continuesat the nearest
  ancestor with an unexplored child.

  you want to go as deep as possible down a tree or graph from left side then start going to the right until the traveral of tree is done.

  * uses less memory because it does not need to store children in its search in each level

  rule of thumb:
  if you know location of the node is at the bottom of the tree or graph then DFS is best to use.

   */
/************************************************ */

// example

/*
          9
     4       20
  1   6    15  170
*/

//using DFS the list would look like this * /
//[9, 4, 1, 6, 20, 15, 170]

// TYPES OF TRAVERSALS

// InOrder [1, 3, 6, 9, 15, 20, 170]

// PreOrder [9, 4, 1, 6, 20, 15, 170] - useful if you want to recreate a tree

// PostOrder [1,6,4,15,170,20, 9]  search left side, first and children come before the parent -- then the rightside and children come before the parent





//exercise

//If you know a solution is not far from the root of the tree:
// BFS

//If the tree is very deep and solutions are rare: 
// BFS (DFS will take a really long time)

//If the tree is very wide:
 // DFS   (BFS will need too much memory)

//If solutions are frequent but located deep in the tree:
// DFS

//Determining whether a path exists between two nodes:
// DFS

//Finding the shortest path:
// BFS