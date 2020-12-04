// import Game from './game.js'

class Column {
    constructor() {
        this.tokens = []
    }
    add(playerNumber) {
        this.tokens.push(playerNumber)
    }
    getTokenAt(rowIndex) {
        let val = this.tokens[rowIndex]
        if (!val) return null
        else return val
    }
}



export default Column