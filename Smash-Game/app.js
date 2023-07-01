const board = document.getElementById('board')
const boardW = 760
const boardh = 500
const balld = 30
const ublockW = 100
const ublockH = 25
let userStart = 350
let timerId = null
let xDir = 2
let yDir = 2

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + ublockW, yAxis]
        this.topLeft = [xAxis, yAxis + ublockH]
        this.topRight = [xAxis + ublockW, yAxis + ublockH]
    }
}

const blocks = [
    new Block(0, 0),
    new Block(110, 0),
    new Block(220, 0),
    new Block(330, 0),
    new Block(440, 0),
    new Block(550, 0),
    new Block(660, 0),
    new Block(0, 35),
    new Block(110, 35),
    new Block(220, 35),
    new Block(330, 35),
    new Block(440, 35),
    new Block(550, 35),
    new Block(660, 35),
    new Block(0, 70),
    new Block(110, 70),
    new Block(220, 70),
    new Block(330, 70)
]
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const cBlock = document.createElement('div')
        cBlock.classList.add('cBlock')
        cBlock.style.left = blocks[i].bottomLeft[0] + 'px'
        cBlock.style.top = blocks[i].bottomLeft[1] + 'px'
        board.appendChild(cBlock)
    }
}

addBlocks()






const user = document.createElement('div')
user.classList.add('uBlock')
board.appendChild(user)
drawUser()

function drawUser() {
    user.style.left = userStart + 'px' //starting pos of block
}

function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':

            if (userStart > 0) {
                userStart -= 5
                drawUser()
            }
            break;
        case 'ArrowRight':

            if (userStart < (boardW - ublockW)) {
                userStart += 5
                drawUser()
            }
            break;
    }
}

document.addEventListener('keydown', moveUser)






const posBall = [420, 440]
function drawBall() {
    ball.style.left = posBall[0] + 'px'
    ball.style.top = posBall[1] + 'px'
}
let down = false
timerId = setInterval(moveBall, 15)
function moveBall() {
    posBall[0] += xDir
    posBall[1] -= yDir
    drawBall()
    checkForCollison()

}
const ball = document.createElement('div')
ball.classList.add('ball')
board.appendChild(ball)

function checkForCollison() {
    for (let i = 0; i < blocks.length; i++) {
        if ((posBall[0] > blocks[i].bottomLeft[0] && posBall[0] < blocks[i].bottomRight[0]) && ((posBall[1] + balld) > blocks[i].bottomLeft[1] && posBall[1] < blocks[i].topLeft[1])) {
            const allBlocks = document.querySelectorAll('.cBlock')
            allBlocks[i].classList.remove('cBlock')
            blocks.splice(i, 1)
            changeDir()
        }
    }
    if(blocks.length==0){
        alert('You won the game.Reloading....')
        location.reload(true)
    }
    if (posBall[0] >= (boardW - balld) || posBall[1] <= 0 || posBall[0] <= 0) {
        changeDir()
    }
    if (posBall[0] > userStart && posBall[0] < (userStart + ublockW) && (posBall[1] > (boardh - ublockH - balld) && posBall[1] < boardh)) {
        changeDir()
    }
    if (posBall[1] >= (boardh - balld)) {
        clearInterval(timerId)
        document.removeEventListener('keydown', moveUser)
    }
    
}

function changeDir() {
    if (xDir === 2 && yDir === 2) {
        yDir = -2
        return
    }
    if (xDir === 2 && yDir === -2) {
        xDir = -2
        return
    }
    if (xDir === -2 && yDir === -2) {
        yDir = 2
        return
    }
    if (xDir === -2 && yDir === 2) {
        xDir = 2
        return
    }
}





