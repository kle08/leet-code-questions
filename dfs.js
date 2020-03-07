// node class that has a name and an array of children nodes.
// nodes from a simple tree like structure. 
// takes an empty array transverse the treee using DFS 
// input A 
//      /|\
//      b c d
//     /\    \
//    e  f    g
// output [a, b, e,f, c, d, g]

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
}