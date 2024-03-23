import { ChessColor, ChessLocations } from '@/entities/chessBoard';
import { getSquareIsExists } from '../helpers/getSquareIsExists/getSquareIsExists';
import { Coordinates } from '@/entities/chessBoard';

export const knightMechanism = (
	locations: ChessLocations,
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
			if (!locations[stringCoordinates] || locations[stringCoordinates].color !== figureColor) {
				attackedSquares.push(stringCoordinates);
			}
		}
	});
};
