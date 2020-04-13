import Position from "./Position";

class Cell {
    public alive:boolean;
    public neighbours: Cell[] = [];
    public position: Position;

    constructor(x:number, y:number, alive: boolean = false) {
        this.position = new Position(x, y);
        this.alive = alive;
    }

    public addNeighbour(cell: Cell) {
        this.neighbours.push(cell);
    }
}

export default Cell;