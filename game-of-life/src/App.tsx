import React, { useState } from 'react';
import './App.css';

import CellComponent from "./components/cell";
import SetupComponent from "./components/setup";
import Board from "./components/board";

import Game from "./classes/Game";
import Cell from './classes/Cell';


const game = new Game();
const testCell = new Cell(0, 0, true);

const App = () => {
  const [generation, setGeneration] = useState(game.generation);
  const [boardSize, setBoardSize] = useState(20);

  const gameItt = () => {
    game.itterate();
    setGeneration(game.generation);
  }

  const setBoard = (inputBoardSize: number) => {
    setBoardSize(inputBoardSize);
    for (let column = 0; column < inputBoardSize; column++) {
        for (let row = 0; row < inputBoardSize; row++) {
            game.populate(new Cell(column, row, true));
        }
    }

    //TODO find neighbours
  }

  

  return (
    <div className="App">
      <SetupComponent setSize={setBoard}/>
      <header className="App-header">
          <CellComponent cell={testCell}/>
          <Board cells={game.cells} />
        <p>
          {generation}
        </p>
        <p>
          {boardSize}
        </p>
        <button
          onClick={gameItt}
        >
          Itterate
        </button>
      </header>
    </div>
  );
}

export default App;
