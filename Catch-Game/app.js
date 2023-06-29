const board = document.getElementById('board')
const cardIn = document.createElement('img')
cardIn.setAttribute('src', 'jerry.png')
let scoreCount = 0
let timeCount = 60
const score = document.getElementById('score')
const time = document.getElementById('timeLeft')
score.innerText = scoreCount
time.innerText = timeCount

function createBoard() {
    for (let i = 0; i < 50; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('data-id', i)
        card.addEventListener('mousedown', Catch)
        board.appendChild(card)
    }
}
createBoard()
function Catch() {
    if (this.children.length) {
        scoreCount++
    }
}



const cards = document.querySelectorAll('.card')
let myVar = setInterval(guess, 850)
function guess() {
    timeCount--
    const ranM = Math.floor(Math.random() * 50)
    cards[ranM].appendChild(cardIn)
    score.innerText = scoreCount
    time.innerText = timeCount
    if (timeCount == 0) {
        setTimeout(cls, 500)
    }
}
function cls() {
    clearInterval(myVar)
    alert(`Your score is ${scoreCount}`)
    location.reload(true)
}

