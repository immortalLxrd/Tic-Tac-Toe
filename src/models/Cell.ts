import {Mark} from "./marks/Mark";
import {Board} from "./Board";

export class Cell {
	readonly x: number;
	readonly y: number;
	id: number;
	mark: Mark | null;
	available: boolean;
	board: Board;

	constructor(board: Board, x: number, y: number) {
		this.x = x;
		this.y = y;
		this.id = Math.random();
		this.mark = null;
		this.available = false;
		this.board = board;
	}

	isEmpty() {
		return this.mark === null;
	}
}