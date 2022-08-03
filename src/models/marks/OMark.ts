import {Mark, MarkNames} from "./Mark";
import {Cell} from "../Cell";
import logo from "../../assets/marks/o_mark.png"

export class OMark extends Mark {
	constructor(cell: Cell) {
		super(cell);
		this.name = MarkNames.OMark;
		this.logo = logo;
	}
}