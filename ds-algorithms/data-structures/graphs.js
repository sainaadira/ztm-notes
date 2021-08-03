/*****************************************************************/
/*                         GRAPHS
 one of the most useful & used data structures when it comes
to modeling real life. a set of vales that are related in  a pair ise fashion

characteristics of graphs:

directed: 1 way street

undirected: ie: highway between 2 cities bi-directional way

unweighted:
carries information inside the nodes

weighted:
having data in the edges of the graph
good for calculating optimal paths like in google maps
shows you many different routes to take with shortest/longest time & distance

cyclic:
verticies connected in circular fashion (cycle)
common in weighted graphs

acyclic:
cannot connect in that fashion

*/
/******************************************************************/


// building a graph

// edge list - shows the connections of the graph

const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

// adjacent list - index if node, value is node's neighbor
// can be represented by arr, obj or linked list

const graph = [[2], [2, 3], [0, 1, 3], [1, 2]]

// adjacent matrix -- uses 0 & 1's to see if node x has connections with node y
// 0 = no 1 = yes

const graph = {
  0: [0, 0, 1, 0], // index 0 has connection with 0,1,2
  1: [0, 0, 1, 1], // node 1 has connections to 2/3
  2: [1, 1, 0, 1], // node 2 has connection with 0,1,3
  3: [0, 1, 1, 0] // node 4 is connected to 1 & 2
}


// graph imeplentation 

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    // when you enter a new node, it wont have connections initally add edgges ager
    this.adjacentList[node] = []
    this.numberOfNodes++
  }
  addEdge(node1, node2) {
    //undirected Graph  add connection bewteen node 1 and 2
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)

  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5

// pros of graphs                  cons of graphs
// relationships                   scaling is hard