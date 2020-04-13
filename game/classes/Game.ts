class Game {
    public generation: number;

    constructor() {
        this.generation = 0;
    }

    itterate() {
        this.generation = this.generation + 1;
        console.log("itt")
    }
}

export default Game;