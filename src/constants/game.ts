import { TurnValue, GameState } from 'types/game'

export const INITIAL_TURN_VALUE: TurnValue = 'X'
export const INITIAL_BOARD = Array(9).fill(null)
export const WINNER_SEQUENCES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
export const GAME_INITIAL_STATE: GameState = {
  board: INITIAL_BOARD,
  turn: INITIAL_TURN_VALUE,
  winner: null,
  isBoardFilled: false,
  toggleTurn: () => {},
  cellClickHandler: () => {},
  reset: () => {},
}
