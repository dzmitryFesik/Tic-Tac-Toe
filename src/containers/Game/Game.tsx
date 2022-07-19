import './styles.scss'
import Board from 'components/Border/Border'
import Header from 'containers/Game/Header'

const Game = () => (
  <div className="game">
    <Header />
    <Board />
  </div>
)
export default Game
