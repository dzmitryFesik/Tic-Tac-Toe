import React, {FC, useCallback, useContext} from 'react';

import Cell from "./components/Cell";
import {Board, CellValue} from "./interfaces/Game";

const Board = (props: BoardProps) => {
  const {board} = useContext(GameContext)
  
  return board.map((value, index) => (
    <Cell
      key={index}
      index={index}
      value={value}
      />
    )
  )
}

const GameContext = React.createContext({});

const GameProvider = () => {

}

const Game = () => {
  
  return (
    <GameProvider>
      <Board />
    </GameProvider>
  )
}

const App = () => {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
