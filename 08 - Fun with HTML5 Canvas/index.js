const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let isDrawing = false
let lastX = 0
let lastY = 0

const draw = e =>{
if(!isDrawing) return; // stop the fn from running when they are not moused down

}


canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', draw)






