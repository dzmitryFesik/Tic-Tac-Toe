import { useCallback } from 'react'

import './styles.scss'
import { useGameContext } from 'providers/GameProvider'
import Cell from 'components/Cell/Cell'

const Board = () => {
  const { board } = useGameContext()

  const renderBoard = useCallback(
    () =>
      board.map((value, index) => (
        <Cell key={index} index={index} value={value} />
      )),
    [board],
  )

  return <div className="board">{renderBoard()}</div>
}

export default Board
