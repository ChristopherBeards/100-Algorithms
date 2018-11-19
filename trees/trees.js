/* Tree
Implement a Breadth-First Search and Depth-First Search on the given Tree. Each method should accept a
function that gets called with each element in the tree.
*/

/* The Node Class
Accepts an argument that gets assigned to the
data property. The children property is assigned
to an empty array to store a nodes' children.
*/
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // * Stores the new node as a child
  add(data) {
    this.children.push(new Node(data));
  }

  // * Returns everything but what we want to remove
  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  BFS(fn) {
    const arr = [this.root];
    while (arr.length) {
      // Removes first element
      const node = arr.shift();

      // Add nodes children to the back of the array
      arr.push(...node.children);
      fn(node);
    }
  }

  DFS(fn) {
    const arr = [this.root];

    while(arr.length) {
      // Remove first element
      const node = arr.shift();

      // Add nodes children to the front of the array
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
