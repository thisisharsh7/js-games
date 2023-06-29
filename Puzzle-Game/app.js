const cardArray = [
    {
        name: "clip1",
        isrc: './images/clip1.jpg'
    },
    {
        name: "clip2",
        isrc: './images/clip2.jpg'
    },
    {
        name: "clip3",
        isrc: './images/clip3.jpg'
    },
    {
        name: "clip4",
        isrc: './images/clip4.jpg'
    },
    {
        name: "clip5",
        isrc: './images/clip5.jpg'
    },
    {
        name: "clip6",
        isrc: './images/clip6.jpg'
    },
    {
        name: "clip1",
        isrc: './images/clip1.jpg'
    },
    {
        name: "clip2",
        isrc: './images/clip2.jpg'
    },
    {
        name: "clip3",
        isrc: './images/clip3.jpg'
    },
    {
        name: "clip4",
        isrc: './images/clip4.jpg'
    },
    {
        name: "clip5",
        isrc: './images/clip5.jpg'
    },
    {
        name: "clip6",
        isrc: './images/clip6.jpg'
    },
]
cardArray.sort(() => 0.5 - Math.random())
let cN = []
let iN = []

const cards = document.querySelector("#cards")
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const cardOut = document.createElement('div')
        const card = document.createElement('img')
        card.setAttribute('src', './images/clip.jpg')
        card.setAttribute('data-id', i)
        cardOut.appendChild(card)
        cardOut.classList.add('cardOut')
        cards.appendChild(cardOut)
        card.addEventListener('click', flipCard)
    }
}
createBoard()

const card = document.querySelectorAll('img')
function checkMatch() {
    const k = iN[0]
    const c = cN[0]
    if (cN[0] != cN[1]) {
        card.forEach((e) => {
            e.addEventListener('click', flipCard)
        })
        card[iN[1]].setAttribute('src', './images/clip.jpg')
        iN = []
        cN = []
    } else {
        alert('You won')
        location.reload(true)
    }
    iN.push(k)
    cN.push(c)
}
function flipCard() {
    const rand = Math.floor(Math.random() * 9)
    cN.push(cardArray[rand].name);
    const k = this.getAttribute('data-id')
    iN.push(k);
    if (iN[0] != iN[1]) {
        this.setAttribute('src', cardArray[rand].isrc)
    } else {
        this.setAttribute('src', './images/clip.jpg')
        iN = []
        cN = []
    }
    if (cN.length == 2) {
        card.forEach((e) => {
            e.removeEventListener('click', flipCard)
        })
        setTimeout(checkMatch, 1000)
    }
}