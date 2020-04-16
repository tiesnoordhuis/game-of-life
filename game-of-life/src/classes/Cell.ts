import Position from "./Position";

class Cell {
    public survived: boolean = false;
    public alive:boolean;
    public neighbours: Cell[] = [];
    public position: Position;

    constructor(x:number, y:number, alive: boolean = false) {
        this.position = new Position(x, y);
        this.alive = alive;
    }

    public get aliveNeighbours(): number {
        let alives: number = 0;
        this.neighbours.forEach(cell => {
            if (cell.alive) {
                alives ++ ;
            }
        })
        return alives;
    }

    public survive():void {
        if ((this.alive && this.aliveNeighbours === 2) || this.aliveNeighbours === 3) {
            this.survived = true;
        } else {
            this.survived = false;
        }
    }

    public die(): void {
        this.alive = this.survived;
    }

    public addNeighbour(cell: Cell) {
        this.neighbours.push(cell);
    }

    public addIfNeighbour(cell: Cell) {
        if (this.position.isNeighbour(cell.position)) {
            this.addNeighbour(cell);
        }
    }
}

export default Cell;