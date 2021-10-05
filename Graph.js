class Graph {

  constructor() {

    this.nodes = []
  }

  addNode(name) {

    this.nodes.push({

      id: this.nodes.length,
      name: name,
      edges: [],
    })
  }

  getNode(name) {
    
    return this.nodes.find(node => node.name === name)
  }

  setEdge(sourceName, targetName, weight = 1, recursive = true) {

    const sourceNode = this.getNode(sourceName)
    const targetNode = this.getNode(targetName)
    
    if (sourceNode && targetNode) {

      sourceNode.edges.push({
        name: targetName,
        value: weight,
      })

      if (recursive) {

        targetNode.edges.push({
          name: sourceName,
          value: weight,
        })
      }
    }
  }
}

// const graph = new Graph()

// graph.addNode('A')
// graph.addNode('B')
// graph.addNode('C')
// graph.addNode('D')
// graph.addNode('E')

// graph.setEdge('A', 'B', 3)
// graph.setEdge('A', 'C', 6)
// graph.setEdge('A', 'D', 1)

// graph.setEdge('B', 'E', 8)

// graph.setEdge('C', 'D', 4)
// graph.setEdge('C', 'E', 4)

// graph.setEdge('D', 'E', 12)

// console.log(graph)

// console.log(dijcstra(graph.nodes, 'A', 'E'))