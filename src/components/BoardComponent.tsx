import React, {FC, useState} from "react";
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import {XMark} from "../models/marks/XMark";
import {Players} from "../models/Players";
import {OMark} from "../models/marks/OMark";


interface IBoardComponent {
	board: Board ;
	setBoard: (board: Board) => void;
	currentPlayer: Players;
	swapPlayer: () => void;
}

const BoardComponent: FC<IBoardComponent> = ({board,setBoard, currentPlayer, swapPlayer}) => {


	function click(cell: Cell) {
		if (cell.isEmpty()) {
			cell.mark = (currentPlayer === Players.FIRST) ? new XMark(cell) : new OMark(cell);
			swapPlayer();
		}
	}

	return (
		<React.Fragment>
			<div className="board">
				{
					board.cells.map((row, index) =>
						<React.Fragment key={index}>
							{row.map(cell => (
								<React.Fragment key={cell.id}>
									<CellComponent
										cell={cell}
										selected={false}
										click={click}
									/>
								</React.Fragment>))
							}
						</React.Fragment>
					)
				}
			</div>
		</React.Fragment>
	)
};

export default BoardComponent;