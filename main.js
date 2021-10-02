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