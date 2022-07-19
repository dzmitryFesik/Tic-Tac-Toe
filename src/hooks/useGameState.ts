import { useCallback, useEffect, useMemo, useState } from 'react'

import { Board, TurnValue } from 'types/game'
import { checkHasWinner } from 'utils/checkHasWinner'
import { INITIAL_BOARD, INITIAL_TURN_VALUE } from 'constants/game'

const useGameState = () => {
  const [winner, setWinner] = useState<TurnValue | null>(null)
  const [board, setBoard] = useState<Board>(INITIAL_BOARD)
  const [turn, setTurn] = useState(INITIAL_TURN_VALUE)

  const isBoardFilled = useMemo(
    () => board.every((value) => value !== null),
    [board],
  )

  const toggleTurn = useCallback(() => {
    setTurn((prevState) => (prevState === 'X' ? 'O' : 'X'))
  }, [])

  const cellClickHandler = useCallback(
    (index: number) => {
      if (board[index] !== null || winner !== null || isBoardFilled) {
        return
      }

      setBoard((prevState) =>
        prevState.map((value, i) => (index === i ? turn : value)),
      )
    },
    [board, isBoardFilled, turn, winner],
  )

  const reset = useCallback(() => {
    setWinner(null)
    setBoard(INITIAL_BOARD)
    setTurn(INITIAL_TURN_VALUE)
  }, [])

  useEffect(() => {
    const winner = checkHasWinner(board)

    if (winner) {
      setWinner(winner)
      return
    }

    toggleTurn()
  }, [toggleTurn, board])

  return {
    board,
    turn,
    winner,
    isBoardFilled,
    cellClickHandler,
    toggleTurn,
    reset,
  }
}

export default useGameState
