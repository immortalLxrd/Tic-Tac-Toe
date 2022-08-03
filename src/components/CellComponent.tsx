import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface ICellComponent {
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
}

const CellComponent: FC<ICellComponent> = ({cell, selected, click}) => {
	return (
		<>
			<div className="board__cell"
				 onClick={() => click(cell)}
			>
				{cell.mark?.logo && <img src={cell.mark.logo} alt="" className="board__mark"/>}
			</div>
		</>
	);
};

export default CellComponent;