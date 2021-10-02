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

const findMin = nodes => {
  
  let min = nodes.find(node => !node.completed)

  if (!min) {
    return false
  }

  for (node of nodes) {

    if (node.value < min.value && !node.completed) {
      min = node
    }
  }
    
  return min
}

const getNode = name => {
  return graph.find(node => node.name === name)
}

for (node of graph) {

  node.completed = false
  node.value = node.name === start ? 0 : Infinity

  for (edge of node.edges) {
    edge.completed = false
  }
}

console.log(graph)

let currentNode = findMin(graph)

while (currentNode) {
  
  console.log(currentNode)

  let currentEdge = findMin(currentNode.edges)

  while (currentEdge) {

    getNode(currentEdge.name).value = currentNode.value + currentEdge.value
    currentEdge.completed = true

    console.log(currentEdge)

    currentEdge = findMin(currentNode.edges)
  }

  currentNode.completed = true
  currentNode = findMin(graph)

  console.log(graph)
}