import {useCallback, useEffect, useState} from "react";

import { Board, CellValue } from '../interfaces/Game'
import {checkHasWinner} from "../utils/checkHasWinner";

type Props = {
  initTurn: CellValue
}

const useGame = (props: Props) => {
  const { initTurn } = props
  
  const [isFinish, setIsFinish] = useState(false);
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [turn, setTurn] = useState(initTurn)
  
  // TODO: implement
  const cellClickHandler = useCallback((index: number) => {
    setBoard((prevState => prevState.map((value, i) => index === i ? turn : value)))
    toggleTurn();
  }, [])
  
  // TODO: implement
  const toggleTurn = useCallback(() => {
    setTurn((prevState => prevState === 'X' ? "O" : "X"))
  }, [])
  
  useEffect(() => {
    checkHasWinner(board)
  }, [board])
  
  return {
    board,
    turn,
    isFinish,
    cellClickHandler,
    toggleTurn
  }
}

export default useGame;
