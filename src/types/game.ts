import useGameState from 'hooks/useGameState'

export type TurnValue = 'X' | 'O'
export type Board = TurnValue[]
export type GameState = ReturnType<typeof useGameState>
