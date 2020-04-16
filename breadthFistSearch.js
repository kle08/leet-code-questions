// breadth first search 
// given node and a class 
// implement a fx that takes an empty array and traverse the tree using BFS approach
// input will be a array
// output - array of nodes from the given graph 
// problem is practicing using BFS which is uses a queue method 

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  bFS(array) {

  }
}