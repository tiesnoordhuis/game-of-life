import RuleSet from "./RuleSet";
import Cell from "./Cell";

class Game {
    public generation: number;
    private ruleSet: RuleSet = new RuleSet();
    public cells: Cell[] = [];

    constructor() {
        this.generation = 0;
    }

    public populate(cell: Cell): void {
        this.cells.push(cell);
    }

    public start(): void {
        this.setAllNeighbours();
    }

    public itterate(): void {
        this.setAllSurvive();
        this.generation = this.generation + 1;
    }

    private setAllSurvive(): void {
        this.cells.forEach(cell => {
            cell.alive = this.ruleSet.survive(cell);
        })
    }

    private setAllNeighbours(): void {
        this.cells.forEach(cell => {
            this.setNeighbours(cell);
        })
    }

    private setNeighbours(currentCell: Cell): void {
        this.cells.forEach(otherCell => {
            if (this.ruleSet.isNeighbour(currentCell, otherCell)) {
                currentCell.addNeighbour(otherCell);
            }
        })
    }
}

export default Game;