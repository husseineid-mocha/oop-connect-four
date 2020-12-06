// import Game from './game.js'

class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null]
    }
    add(playerNumber) {
        for (let i = 5; i >= 0; i -= 1) {
            if (this.tokens[i] === null) {
                this.tokens[i] = playerNumber
                break;
            }
        }
    }
    getTokenAt(rowIndex) {
        let val = this.tokens[rowIndex]
        if (!val) return null
        else return val
    }

    isFull() {
        return this.tokens[0] !== null
    }
}



export default Column