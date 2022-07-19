import {memo, useCallback, useContext} from "react";

import {CellValue} from "../interfaces/Game";

type CellProps = {
  index: number
  value: CellValue
}

const Cell = (props: CellProps) => {
  const {index, value} = props;
  
  const { cellClickHandler } = useContext(GameContext)
  
  const clickHandler = useCallback(() => {
    if(value) {
      return;
    }
    
    cellClickHandler(index)
  }, [])
  
  return <div onClick={clickHandler}>{value}</div>
}

export default memo(Cell)
