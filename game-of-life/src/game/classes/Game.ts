class Game {
    public generation: number;

    constructor() {
        this.generation = 0;
    }

    itterate() {
        this.generation ++;
    }
}

export default Game;