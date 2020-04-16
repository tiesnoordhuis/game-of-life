import Cell from "./Cell";

class Game {
    public generation: number;
    public cells: Cell[] = [];

    constructor() {
        this.generation = 0;
    }

    public complexity(): number {
        let alives: number = 0;
        this.cells.forEach(cell => {
            if (cell.alive) {
                alives ++;
            }
        })
        return alives;
    }

    public populateGame(boardSize: number) {
        for (let column = 0; column < boardSize; column++) {
            for (let row = 0; row < boardSize; row++) {
                this._populate(new Cell(column, row, false));
            }
        }
        
        this._findAllNeighbours();
    }

    private _populate(cell: Cell): void {
        this.cells.push(cell);
    }

    private _findAllNeighbours(): void {
        this.cells.forEach((currentCell, cellIndex, cells) => {
            for (let checkIndex = 0; checkIndex < cells.length; checkIndex++) {
                const checkCell = cells[checkIndex];
                if (currentCell.neighbours.length > 7) {
                    break
                }
                currentCell.addIfNeighbour(checkCell);
            }            
        })
    }

    public itterate(): void {
        this.setAllSurvive();
        this.generation = this.generation + 1;
    }

    private setAllSurvive(): void {
        this.cells.forEach(cell => {
            cell.survive();
        })
        this.cells.forEach(cell => {
            cell.die();
        })
    }
}

export default Game;