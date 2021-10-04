const canvas = document.getElementById('canvas')
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight

const ctx = canvas.getContext('2d')
ctx.strokeStyle = 'white'
ctx.fillStyle = '#303030'

const nodes = []

const radius = 10

const renderNodes = () => {

  for (node of nodes) {

    ctx.beginPath()
    ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
  }
}

const render = () => {

  renderNodes()
}

const loop = () => {

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  render()

  requestAnimationFrame(loop)
}

canvas.addEventListener('click', (event) => {
  
  nodes.push({
    x: event.offsetX,
    y: event.offsetY,
    radius,
  })

  document.querySelector('.col-m').innerHTML += `<pre>${JSON.stringify(nodes[nodes.length - 1], 2, true)}</pre>`
})

loop()