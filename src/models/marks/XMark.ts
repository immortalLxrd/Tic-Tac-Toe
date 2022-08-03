import {Mark, MarkNames} from "./Mark";
import {Cell} from "../Cell";
import logo from "../../assets/marks/x_mark.png"

export class XMark extends Mark {
	constructor(cell: Cell) {
		super(cell);
		this.name = MarkNames.XMark;
		this.logo = logo;
	}
}