import Game from './game.js'

let game = undefined

window.addEventListener("DOMContentLoaded", event => {
    const nameOneInput = document.getElementById("player-1-name")
    const nameTwoInput = document.getElementById("player-2-name")
    const formHolder = document.getElementById("form-holder")
    const newGameBtn = document.getElementById("new-game")

    formHolder.addEventListener("keyup", event => {
        nameOneValue = nameOneInput.value
        newTwoValue = nameTwoInput.value

        if (nameOneValue && nameTwoValue) {
            newGameBtn.setAttribute("disabled", false)
        } else {
            newGameBtn.setAttribute("disabled", true)
        }
    })



})