import './styles.scss'
import { useGameContext } from 'providers/GameProvider'
import { useMemo } from 'react'

const Header = () => {
  const { winner, turn, isBoardFilled, reset } = useGameContext()

  const showRestartButton = useMemo(
    () => winner || isBoardFilled,
    [isBoardFilled, winner],
  )

  return (
    <div className="game__header">
      <h2>{`Current turn is: ${turn}`}</h2>
      {winner && <h3>{`${winner} is winner`}</h3>}
      {showRestartButton && <button onClick={reset}>Restart game</button>}
    </div>
  )
}

export default Header
