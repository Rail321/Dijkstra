const nodeList = document.querySelector('#nodeList')

nodeList.innerHTML = ''

const addItem = (node) => {

  nodeList.innerHTML += `<div class="mb-1"><div class="p-1 brt-1 border bg-gray"><div class="row"><div class="col col-max">${JSON.stringify(node, 2, true)}</div><div class="col col-min row"><div class="col px-1"> <img class="" src="./icons/chevron-down.svg" alt="&#9747"></div><div class="col px-1"> <img class="" src="./icons/x-lg.svg" alt="&#10095"></div></div></div></div><div class="p-1 brb-1 border-bottom border-x"><div class="mbn-1"><div class="p-1 br-1 border bg-gray mb-1"><div class="row"><div class="col col-max"> B</div><div class="col col-min"><div class="px-1"> <img class="" src="./icons/x-lg.svg" alt="&#10095"></div></div></div></div></div></div></div></div>`
}