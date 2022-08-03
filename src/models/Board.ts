import {Cell} from "./Cell";

export class Board {
	cells: Cell[][] = [];

	public initCells() {
		for (let i = 0; i < 3; i++) {
			const row: Cell[] = [];
			for (let j = 0; j < 3; j++) {
				row.push(new Cell(this, j, i));
			}
			this.cells.push(row)
		}
	}
}