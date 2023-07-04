class Graph {

    constructor() {

      this.graph = new Map();

    }

 

    addEdge(vertex, edge) {

      if (!this.graph.has(vertex)) {

        this.graph.set(vertex, []);

      }

      this.graph.get(vertex).push(edge);

    }

 

    // Depth-First Search algorithm

    dfs(startVertex) {

      const visited = new Set();

      this.dfsHelper(startVertex, visited);

    }

 

    dfsHelper(vertex, visited) {

      visited.add(vertex);

      console.log(vertex);

 

      const neighbors = this.graph.get(vertex) || []; // Initialize neighbors as an empty array if it's undefined

      for (const neighbor of neighbors) {

        if (!visited.has(neighbor)) {

          this.dfsHelper(neighbor, visited);

        }

      }

    }

  }

 

  const graph = new Graph();

 

  graph.addEdge('P', 'Q');

  graph.addEdge('P', 'R');

  graph.addEdge('Q', 'S');

  graph.addEdge('Q', 'T');

  graph.addEdge('R', 'U');

 

  graph.dfs('P');

