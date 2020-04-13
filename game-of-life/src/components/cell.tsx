import React, { useState } from 'react';
import Cell from '../classes/Cell';

interface CellComponentProps {
    cell: Cell
}

const CellComponent = ({ cell }: CellComponentProps) => {
    const [alive, setAlive] = useState(cell.alive)
    return (
        <span 
            onClick={() => setAlive(!alive)}
            style={{userSelect:"none"}}
        >
            {alive ? "Alive" : "Dead"}
        </span>
    )
}

export default CellComponent