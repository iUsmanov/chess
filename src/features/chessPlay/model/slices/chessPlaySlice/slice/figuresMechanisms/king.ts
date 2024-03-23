import { ChessColor } from '@/entities/chessBoard';
import { ChessPlaySchema } from '../../../../types/chessPlaySchema';
import { getSquareIsExists } from '../helpers/getSquareIsExists/getSquareIsExists';
import { Coordinates } from '@/entities/chessBoard';

export const kingMechanism = (
	state: ChessPlaySchema,
	figureColor: ChessColor,
	attackedSquares: string[],
	x: number,
	y: number
) => {
	const coords: Coordinates[] = [
		{
			x: x + 1,
			y: y + 1,
		},
		{
			x: x - 1,
			y: y - 1,
		},
		{
			x: x + 1,
			y: y - 1,
		},
		{
			x: x - 1,
			y: y + 1,
		},
		{
			x,
			y: y + 1,
		},
		{
			x,
			y: y - 1,
		},
		{
			x: x + 1,
			y,
		},
		{
			x: x - 1,
			y,
		},
	];

	Object.values(coords).forEach((coordinates) => {
		const stringCoordinates = `${coordinates.x}${coordinates.y}`;
		if (getSquareIsExists(coordinates)) {
			if (
				!state.locations[stringCoordinates] ||
				state.locations[stringCoordinates].color !== figureColor
			) {
				attackedSquares.push(stringCoordinates);
			}
		}
	});
};
