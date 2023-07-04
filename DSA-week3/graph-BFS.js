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

   

    bfs(startVertex) {

      const visited = new Set();

      const queue = [];

     

      visited.add(startVertex);

      queue.push(startVertex);

     

      while (queue.length !== 0) {

        const currentVertex = queue.shift();

        console.log(currentVertex);

       

        const neighbors = this.graph.get(currentVertex) || [];

        for (const neighbor of neighbors) {

          if (!visited.has(neighbor)) {

            visited.add(neighbor);

            queue.push(neighbor);

          }

        }

      }

    }

  }

 

  const graph = new Graph();

  graph.addEdge('A', 'B');

  graph.addEdge('A', 'C');

  graph.addEdge('B', 'D');

  graph.addEdge('B', 'E');

  graph.addEdge('C', 'F');

 

  graph.bfs('A');

