def chess_board(input_num):
    board = []

    for row in range(input_num):
        current_row = ""

        for column in range(input_num):
            if (row + column) % 2 == 0:
                current_row += "W "
            else:
                current_row += "B "

        board.append(current_row)

    return "\n".join(board)


print(chess_board(5))
print(chess_board(8))
