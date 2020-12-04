import Column from './column.js'

class Game {
    constructor(player1name, player2name) {
        this.player1name = player1name
        this.player2name = player2name
        this.currentPlayer = 1
        this.columns = []
            // Array(7).fill(new Column())
        for (let index = 0; index < 7; index++) {
            this.columns.push(new Column())
        }

    }
    getName() {
        return `${this.player1name} vs. ${this.player2name}`
    }
    playInColumn(columnIndex) {
        const column = this.columns[columnIndex]
        column.add(this.currentPlayer)

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2
        } else {
            this.currentPlayer = 1
        }
    }
    getTokenAt(rowIndex, columnIndex) {
        const column = this.columns[columnIndex]
        return column.getTokenAt(rowIndex)
    }
}

export default Game