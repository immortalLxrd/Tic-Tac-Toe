import React, {useEffect, useState} from 'react';
import './App.scss';
import BoardComponent from "./components/BoardComponent";
import {Players} from "./models/Players";
import {Board} from "./models/Board";

function App() {
    const [currentPlayer, setCurrentPlayer] = useState<Players>(Players.FIRST)
    const [board, setBoard] = useState<Board>(new Board())

    useEffect(() => {
        restart();
        setCurrentPlayer(Players.FIRST);
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        setBoard(newBoard);
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer === Players.FIRST ? Players.SECOND : Players.FIRST);
    }

    return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer}/>
    </div>
  );
}

export default App;
