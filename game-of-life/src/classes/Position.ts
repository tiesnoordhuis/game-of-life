class Position {
    public x: number;
    public y: number;

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    public isNeighbour(neighbour: Position) {
        const deltaX = Math.abs(this.x - neighbour.x);
        const deltaY = Math.abs(this.y - neighbour.y);
        if (deltaX === 1 && deltaY === 1) {
            return true;
        } else if(deltaX + deltaY === 1) {
            return true;
        }
        return false;
    }
}

export default Position;