import { Board } from 'types/game'
import { WINNER_SEQUENCES } from 'constants/game'

export const checkHasWinner = (board: Board) => {
  for (let i = 0; i < WINNER_SEQUENCES.length; i++) {
    const [a, b, c] = WINNER_SEQUENCES[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  return null
}
