const dijcstra = (graph, start, end) => {

  const getNextNode = (graph) => {

    let nextNode = graph.find(node => !node.done)

    for (node of graph) {

      if (!node.done &&  node.value < nextNode.value) {

        nextNode = node
      }
    }

    return nextNode
  }

  const getNextEdge = (node) => {

    let nextEdge = node.edges.find(edge => !edge.done)

    for (edge of node.edges) {

      if (!edge.done &&  edge.value < nextEdge.value) {

        nextEdge = edge
      }
    }

    return nextEdge
  }

  for (node of graph) {

    node.done = false
    node.value = node.name === start ? 0 : Infinity

    for (edge of node.edges) {

      edge.done = false
    }
  }

  let currentNode

  currentNode = getNextNode(graph)

  while (currentNode) {

    let currentEdge = getNextEdge(currentNode)

    // console.log('currentNode: ', currentNode) // debug

    while (currentEdge) {

      // console.log(' currentEdge: ', currentEdge) // debug

      const targetNode = graph.find(node => node.name === currentEdge.name)
      const currentValue = currentNode.value + currentEdge.value

      // console.log(' targetNode: ', targetNode) // debug
      // console.log(' currentValue: ', currentValue) // debug

      if (currentValue < targetNode.value) {

        targetNode.value = currentValue

        // console.log(' targetNode: ', targetNode) // debug
      }

      // console.log('') // debug

      currentEdge.done = true

      currentEdge = getNextEdge(currentNode)
    }

    currentNode.done = true

    currentNode = getNextNode(graph)
  }

  // console.log('graph: ', graph) // debug

  return graph.find(node => node.name === end)
}