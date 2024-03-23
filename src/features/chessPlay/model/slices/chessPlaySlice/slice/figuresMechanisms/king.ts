import { ChessColor, ChessLocations } from '@/entities/chessBoard';
import { getSquareIsExists } from '../helpers/getSquareIsExists/getSquareIsExists';
import { Coordinates } from '@/entities/chessBoard';

export const kingMechanism = (
	x: number,
	y: number,
	attackedSquares: string[],
	locations: ChessLocations,
	figureColor: ChessColor
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
			if (!locations[stringCoordinates] || locations[stringCoordinates].color !== figureColor) {
				attackedSquares.push(stringCoordinates);
			}
		}
	});
};
