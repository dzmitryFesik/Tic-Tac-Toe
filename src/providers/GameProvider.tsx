import React, { createContext, ReactNode, useContext } from 'react'

import { GAME_INITIAL_STATE } from 'constants/game'
import useGameState from 'hooks/useGameState'

const GameContext = createContext(GAME_INITIAL_STATE)

type Props = {
  children: ReactNode
}

const GameProvider = (props: Props) => {
  const { children } = props

  const gameState = useGameState()

  return (
    <GameContext.Provider value={gameState}>{children}</GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
export default GameProvider
