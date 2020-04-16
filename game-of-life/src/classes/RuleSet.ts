import Cell from "./Cell";

class RuleSet {
    survive(cell: Cell): boolean {
        if (cell.alive && cell.aliveNeighbours === 2) {
            return true;
        }
        if (cell.aliveNeighbours === 3) {
            return true;
        }
        return false;
    }

    public isNeighbour(cell1: Cell, cell2: Cell): boolean {
        if (this.isPosNeigbour(cell1.position.x, cell2.position.x) && 
            this.isPosNeigbour(cell1.position.y, cell2.position.y)) {
            return true
        }
        return false
    }

    private isPosNeigbour(pos1: number, pos2: number): boolean {
        return (Math.abs(pos1 - pos2) <= 1);
    }
}

export default RuleSet;