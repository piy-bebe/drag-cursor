const block = document.querySelector('.block')
let isDown = false
let posX = 0
let posY = 0
let bufferX = 0
let bufferY = 0

block.addEventListener('mousedown', (e) => {
  isDown = true
  block.classList.add('block_active')
  posX = e.pageX
  posY = e.pageY
})

block.addEventListener('mouseup', (e) => {
  isDown = false
  block.classList.remove('block_active')
  bufferX = parseInt(block.style.left)
  bufferY = parseInt(block.style.top)
})

block.addEventListener('mouseleave', (e) => {
  isDown = false
  block.classList.remove('block_active')
  bufferX = parseInt(block.style.left)
  bufferY = parseInt(block.style.top)
})

block.addEventListener('mousemove', (e) => {
  if (!isDown) return
  block.style.left = bufferX + e.pageX - posX + 'px'
  block.style.top = bufferY + e.pageY - posY + 'px'
})
