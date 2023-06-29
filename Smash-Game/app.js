const board = document.getElementById('board')
const boardW = 800
const boardh = 500
const balld = 30
const userStart = 350

const ball = document.createElement('div')
ball.classList.add('ball')
board.appendChild(ball)

const user = document.createElement('div')
user.classList.add('uBlock')
board.appendChild(user)
user.style.left = userStart+'px' //starting pos of block
user.addEventListener('keydown',moveUser)


function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(userStart>0){
                userStart -= 10
                user.style.left = userStart+'px' 
            }
            break;
    }
}



function move(){
    ball.style.left='20px'
}

move()