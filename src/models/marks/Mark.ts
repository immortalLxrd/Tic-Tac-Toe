import {Cell} from "../Cell";
import logo from "../../assets/marks/o_mark.png"


export enum MarkNames {
	Mark = "Mark",
	XMark = "XMark",
	OMark = "OMark"
}

export class Mark {
	cell: Cell;
	name: MarkNames;
	logo: typeof logo | null;

	constructor(cell: Cell) {
		this.cell = cell;
		this.name = MarkNames.Mark;
		this.logo = null;
	}
}