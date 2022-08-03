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

	isEnd(): boolean {
		const length = this.cells.length;
		for (let i = 0; i < length; i++) {
			if ((this.cells[i][0].mark?.name && this.cells[i][0].mark?.name === this.cells[i][1].mark?.name
					&& this.cells[i][1].mark?.name && this.cells[i][1].mark?.name === this.cells[i][2].mark?.name)
				|| (this.cells[0][i].mark?.name && this.cells[0][i].mark?.name === this.cells[1][i].mark?.name
					&& this.cells[i][i].mark?.name && this.cells[i][i].mark?.name === this.cells[2][i].mark?.name)) {
				return true;
			}
		}

		if (length && this.cells[1][1].mark?.name
			&& ((this.cells[0][0].mark?.name === this.cells[1][1].mark?.name
					&& this.cells[1][1].mark?.name === this.cells[2][2].mark?.name)
				|| (this.cells[0][2].mark?.name === this.cells[1][1].mark?.name
					&& this.cells[1][1].mark?.name === this.cells[2][0].mark?.name))) {
			return true;
		}

		return false;
	}
}