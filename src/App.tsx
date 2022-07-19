import React from 'react'

import GameProvider from './providers/GameProvider'
import Game from './containers/Game/Game'

const App = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}

export default App
