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