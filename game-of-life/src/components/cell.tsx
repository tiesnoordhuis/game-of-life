import React, { useState } from 'react';
import Cell from '../classes/Cell';

interface CellComponentProps {
    cell: Cell,
    itteration: number
}

const CellComponent = ({ cell , itteration }: CellComponentProps) => {
    const [update, didUpdate] = useState(0);
    const switchAlive = () => {
        cell.alive = !cell.alive;
        didUpdate(update + 1);
    }
    
    return (
        <div 
            onClick={switchAlive}
            style={cell.alive ? { ...cellStyle, backgroundColor: "#274213"} : { ...cellStyle, backgroundColor: "#303030"}}
        >
            {"\u00a0"}
        </div>
    )
}

const cellStyle: React.CSSProperties = {
    height: 40,
    width: 40,
    display: "inline-block",
    border: "solid",
    userSelect:"none"
};

export default CellComponent;