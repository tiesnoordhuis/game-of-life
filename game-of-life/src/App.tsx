import React, { useState } from 'react';
import './App.css';

import SetupComponent from "./components/setup";
import Board from "./components/board";

import Game from "./classes/Game";


const game = new Game();

const App = () => {
  const [generation, setGeneration] = useState(-1);

  const gameItt = () => {
    game.itterate();
    setGeneration(generation + 1)
    
  }

  const setBoard = (inputBoardSize: number) => {
    game.populateGame(inputBoardSize);
    setGeneration(0);
  }  

  return (
    <div className="App">
      <SetupComponent setSize={setBoard}/>
          {game.generation}
        <button
          onClick={gameItt}
        >
          Itterate
        </button>
      <header className="App-header">
          <Board cells={game.cells} itteration={generation}/>
        <p>
        </p>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
