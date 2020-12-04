import Game from './game.js'

let game = undefined

const updateUI = function() {
  const boardHolder = document.getElementById('board-holder')
  const gameName = document.getElementById('game-name')

  if (!game) boardHolder.classList.add('is-invisible')
  else {
    boardHolder.classList.remove('is-invisible')
    gameName.innerHTML = game.getName()
  }
}

window.addEventListener("DOMContentLoaded", event => {
    const nameOneInput = document.getElementById("player-1-name")
    const nameTwoInput = document.getElementById("player-2-name")
    const formHolder = document.getElementById("form-holder")
    const newGameBtn = document.getElementById("new-game")

    formHolder.addEventListener("keyup", event => {
        let nameOneValue = nameOneInput.value
        let nameTwoValue = nameTwoInput.value
        console.log(`file: connect-four.js ~ line 32 ~ nameTwoValue`, nameTwoValue);
        console.log(`file: connect-four.js ~ line 32 ~ nameOneValue`, nameOneValue);
        console.log(`file: connect-four.js ~ line 29 ~ nameOneValue && nameTwoValue`, nameOneValue.length > 0 && nameTwoValue.length > 0);

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

})
