import Game from './game.js'

let game = undefined

const updateUI = function() {
    const boardHolder = document.getElementById('board-holder')
    const gameName = document.getElementById('game-name')
    const currentPlayer = game.currentPlayer;
    const clickTargets = document.getElementById("click-targets")

    if (!game) boardHolder.classList.add('is-invisible')
    else {
        boardHolder.classList.remove('is-invisible')
        gameName.innerHTML = game.getName()
        if (currentPlayer === 1) {
            clickTargets.classList.add("black")
            clickTargets.classList.remove("red")
        } else {
            clickTargets.classList.add("red")
            clickTargets.classList.remove("black")
        }
    }

    for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
        const isColumnFull = game.isColumnFull(columnIndex)
        const columnId = `column-${columnIndex}`
        const column = document.getElementById(columnId)

        if (isColumnFull) {
            column.classList.add('full')
        } else {
            column.classList.remove('full')
        }
    }

    for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
        for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
            const square = document.getElementById(`square-${rowIndex}-${columnIndex}`)
            square.innerHTML = ''

            const tokenNum = game.getTokenAt(rowIndex, columnIndex)
            if (tokenNum === 1) {
                let token = document.createElement('div')
                token.classList.add('token', 'black')
                square.appendChild(token)
            } else if (tokenNum === 2) {
                let token = document.createElement('div')
                token.classList.add('token', 'red')
                square.appendChild(token)
            }
        }
    }
}

window.addEventListener("DOMContentLoaded", event => {
    const nameOneInput = document.getElementById("player-1-name")
    const nameTwoInput = document.getElementById("player-2-name")
    const formHolder = document.getElementById("form-holder")
    const newGameBtn = document.getElementById("new-game")
    const clickTargets = document.getElementById("click-targets")

    formHolder.addEventListener("keyup", event => {
        let nameOneValue = nameOneInput.value
        let nameTwoValue = nameTwoInput.value

        if (nameOneValue.length > 0 && nameTwoValue.length > 0) {
            newGameBtn.attributes.removeNamedItem('disabled')
        } else {
            newGameBtn.setAttribute('disabled', '')
        }
    })

    newGameBtn.addEventListener('click', event => {
        game = new Game(nameOneInput.value, nameTwoInput.value)
        nameOneInput.value = ''
        nameTwoInput.value = ''
        newGameBtn.setAttribute("disabled", "")
        updateUI()
    })

    clickTargets.addEventListener("click", event => {
        const targetId = event.target.id

        if (targetId.startsWith("column-")) {
            let columnNum = Number.parseInt(targetId[targetId.length - 1])
            game.playInColumn(columnNum)
        }
        updateUI()
    })
})