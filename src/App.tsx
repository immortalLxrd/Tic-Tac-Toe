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
		setCurrentPlayer(Players.FIRST);
	}

	function swapPlayer() {
		setCurrentPlayer(currentPlayer === Players.FIRST ? Players.SECOND : Players.FIRST);
	}

	return (
		<div className="App">
			{(board.isWin() && (<>
					<h1 className="title_condition">
						{"WINNER: PLAYER " + (currentPlayer === 1 ? 2 : 1)}
					</h1>
					<div className="restart-btn" onClick={restart}>Restart</div>
				</>))
				|| (board.isDraw() && (<>
					<h1 className="title_condition">
						DRAW
					</h1>
					<div className="restart-btn" onClick={restart}>Restart</div>
				</>))
			}
			<h1 className="title">
				Tic Tac Toe
			</h1>
			<div className="board">
				{(board.isWin() || board.isDraw()) && <div className="block-screen"></div>}
				<BoardComponent
					board={board}
					setBoard={setBoard}
					currentPlayer={currentPlayer}
					swapPlayer={swapPlayer}
					restart={restart}
				/>
			</div>
		</div>
	);
}

export default App;
