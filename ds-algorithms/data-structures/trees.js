
/*****************************************************************/
//                              TREES
// hierarchal data structure  with single root (parent) node
/*****************************************************************/



//binary search tree
// lookup  : O(log N)
// insert  : O(log N)
// delete  : O(log N)


//      9
//  4     20
//1  6  15  170


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
    const newNode = new Node(value)
    // if the root node has no value, set the root to be the new node
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        // is the value entered less than current node value?
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {
    // if root does not exist return false
    if (!this.root) {
      return false
    } else {
      let currentNode = this.root
      //looping through bst until current node is found
      while (currentNode) {
        // if the value is less than currentNode value, go left
        // if value is greater than currentNode value, go right
        if (value < currentNode.value) {
          currentNode = currentNode.left
        } else if (value > currnentNode.value) {
          currentNode = currentNode.right
        } else if (currentNode.value === value) {
          return currentNode
        }
      }
    }
    return false
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))



function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}


/*
*************************************
AVL & RED/BLACK TREE RESOURCE
source: https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree
**************************************

Both red-black trees and AVL trees are the most commonly used balanced binary search trees and they support insertion, deletion and look-up in guaranteed O(logN) time. However, there are following points of comparison between the two:

AVL trees are more rigidly balanced and hence provide faster look-ups. Thus for a look-up intensive task use an AVL tree.
For an insert intensive tasks, use a Red-Black tree.
AVL trees store the balance factor at each node. This takes O(N) extra space. However, if we know that the keys that will be inserted in the tree will always be greater than zero, we can use the sign bit of the keys to store the colour information of a red-black tree. Thus, in such cases red-black tree takes no extra space.

*/



/**************************************
            BINARY HEAPS
      have 2 children to a node

      lookup - O(n)
      insert - O(log n)
      delete - O(log n)

      min & max heap
***************************************/

