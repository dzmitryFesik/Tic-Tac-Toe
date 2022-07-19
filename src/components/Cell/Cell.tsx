import { memo, useCallback } from 'react'

import './styles.scss'
import { TurnValue } from 'types/game'
import { useGameContext } from 'providers/GameProvider'

type CellProps = {
  index: number
  value: TurnValue
}

const Cell = (props: CellProps) => {
  const { index, value } = props

  const { cellClickHandler } = useGameContext()

  const clickHandler = useCallback(() => {
    cellClickHandler(index)
  }, [cellClickHandler, index])

  return (
    <div className="cell" onClick={clickHandler}>
      {value}
    </div>
  )
}

export default memo(Cell)
