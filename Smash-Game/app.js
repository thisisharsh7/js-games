const board = document.getElementById('board')
const boardW = 800
const boardh = 500
const balld = 30
const uBlockW = 100
const userStart = 350

const cblocks = document.createElement('div')
cblocks.classList.add('cBlocks')

for(let i = 0 ;i<25;i++){
    const block = document.createElement('div')
    block.classList.add('cBlock')
    cblocks.appendChild(block)
}

board.appendChild(cblocks)



const ball = document.createElement('div')
ball.classList.add('ball')
board.appendChild(ball)

const user = document.createElement('div')
user.classList.add('uBlock')
board.appendChild(user)
user.style.left = userStart+'px' //starting pos of block


function move(){
    console.log('hey')
}



