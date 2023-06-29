const choice = ["Matches", "Runs", "Wickets", "BST", "Average", "Economy", "HighScore", "Fantasy"]
const cRandom = Math.floor(Math.random() * 8)
const choiceDisplay = document.getElementById("cardCompareDisplay")
choiceDisplay.innerText = choice[cRandom]
const compValues = document.getElementById("compValues").children
const compChoice = document.getElementById("compChoiceDisplay")
const userChoice = document.getElementById("userChoiceDisplay")
const result = document.getElementById("choiceResult")
const uD = userChoice.children
const cD = compChoice.children
const cards = document.getElementById("cards")
cards.classList.toggle('show')
const cardValueDisplay = document.querySelectorAll('li span')
cardValueDisplay.forEach((e) => {
    e.innerHTML = Math.floor(Math.random() * 9) * Math.floor(Math.random() * 9) + 1
})

const overlay1 = document.querySelectorAll(".overlay1")
const overlay2 = document.querySelectorAll(".overlay2")
overlay2.forEach((el) => {
    el.classList.toggle('abs')
})
overlay1.forEach((el) => {
    el.classList.toggle('abs')
})
const handleClick = (e) => {
    cards.classList.toggle('show')
    cards.classList.toggle('sendOut')
    setTimeout(() => {
        cards.classList.toggle('hide')
    }, 500)
    userChoice.innerHTML = e.innerHTML
    overlay2.forEach((el) => {
        el.classList.toggle('abs')
    })
    setTimeout(() => {
        overlay1.forEach((el) => {
            el.classList.toggle('abs')
        })
    }, 1000)
    setTimeout(() => {
        const uD1 = uD[1].children;
        const uD2 = uD1[cRandom].children;
        const uD3 = Number(uD2[0].innerText);
        const cD0 = cD[1].children;
        const cD1 = cD0[0].children;
        const cD2 = cD1[cRandom].children;
        const cD3 = Number(cD2[0].innerText);
        if (uD3 > cD3) {
            result.style.color = "green"
            uD2[0].style.background = 'green'
            cD2[0].style.background = 'red'
            result.innerText = "You won"

        } else if (uD3 < cD3) {
            result.style.color = "red"
            cD2[0].style.background = 'green'
            uD2[0].style.background = 'red'
            result.innerText = "You loose"
        } else {
            uD2[0].style.background = 'gray'
            cD2[0].style.background = 'gray'
            result.innerText = "You Tied"
        }
    }, 3000)
}


