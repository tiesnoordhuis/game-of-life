import React from 'react';
import Cell from '../classes/Cell';
import CellComponent from "../components/cell";

interface BoardProps {
    cells: Cell[],
    itteration: number
}

const Board = ({ cells, itteration }: BoardProps) => {
    let cellDisplay: JSX.Element[][];
    let row = 0;
    cellDisplay = [];
    cellDisplay[0] = [];
    cells.forEach(cell => {
        if (cell.position.x > row) {
            row ++;
            cellDisplay[row] = [];
        }
        cellDisplay[row].push(<CellComponent cell={cell} key={`${cell.position.y} ${itteration}`} itteration={itteration}/>)
    })

    let rowDisplay: JSX.Element[] = [];
    cellDisplay.forEach((row, index) => {
        rowDisplay.push((<div key={index}>{row}</div>))
    })


    return (
        <span>
            {rowDisplay}
        </span>
    )
}

export default Board