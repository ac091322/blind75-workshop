function chessBoard(num) {
    let board = []

    for (let row = 0; row < num; row += 1) {
        let currentRow = ""

        for (let column = 0; column < num; column += 1) {
            if ((row + column) % 2 === 0) {
                currentRow += "W "
            } else {
                currentRow += "B "
            }
        }

        board.push(currentRow)
    }

    return board.join("\n")
}


console.log(chessBoard(5));
console.log(chessBoard(8));
