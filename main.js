const graph = [
  {
    name: 'A',
    edges: [
      {
        name: 'B',
        value: 3,
      },
      {
        name: 'C',
        value: 6,
      },
      {
        name: 'D',
        value: 1,
      },
    ]
  },
  {
    name: 'B',
    edges: [
      {
        name: 'A',
        value: 3,
      },
      {
        name: 'E',
        value: 8,
      },
    ]
  },
  {
    name: 'C',
    edges: [
      {
        name: 'A',
        value: 6,
      },
      {
        name: 'D',
        value: 4,
      },
      {
        name: 'E',
        value: 4,
      },
    ]
  },
  {
    name: 'D',
    edges: [
      {
        name: 'A',
        value: 1,
      },
      {
        name: 'C',
        value: 4,
      },
      {
        name: 'E',
        value: 12,
      },
    ]
  },
  {
    name: 'E',
    edges: [
      {
        name: 'B',
        value: 8,
      },
      {
        name: 'C',
        value: 4,
      },
      {
        name: 'D',
        value: 12,
      },
    ]
  },
]

const start = 'A'
const end = 'E'

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

const dijcstra = (graph, start, end) => {

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

const result = dijcstra(graph, start, end)

console.log(result)