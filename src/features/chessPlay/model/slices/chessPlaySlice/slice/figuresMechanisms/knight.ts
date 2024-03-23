import { ChessColor } from '@/entities/chessBoard';
import { ChessPlaySchema } from '../../../../../model/types/chessPlaySchema';
import { getSquareIsExists } from '../helpers/getSquareIsExists/getSquareIsExists';
import { Coordinates } from '@/entities/chessBoard';

export const knightMechanism = (
	state: ChessPlaySchema,
	figureColor: ChessColor,
	attackedSquares: string[],
	x: number,
	y: number
) => {
	const coords: Coordinates[] = [
		{
			x: x + 2,
			y: y + 1,
		},
		{
			x: x + 1,
			y: y + 2,
		},
		{
			x: x + 2,
			y: y - 1,
		},
		{
			x: x + 1,
			y: y - 2,
		},
		{
			x: x - 2,
			y: y - 1,
		},
		{
			x: x - 1,
			y: y - 2,
		},
		{
			x: x - 2,
			y: y + 1,
		},
		{
			x: x - 1,
			y: y + 2,
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
