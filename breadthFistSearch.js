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
    // define the que and assign it to this 
    const que = [this];
    // while loop to have a condition if the length of que is greater than 0
    while (que.length > 0) {
      // define current which is the first index by pop it
      const current = que.shift();
      // push the current to the array
      array.push(current.name);
      // loop thru the children 
      for (const child of current.children) {
        // push the child to the array
        array.push(child)
      }
    }
    //return array
    return array;
  }
}