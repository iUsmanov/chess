import { ChessColor, ChessLocations } from '@/entities/chessBoard';
import { Coordinates } from './addAttackedDiagonalsSquares';

export const addAds = (
	attackedSquares: string[],
	locations: ChessLocations,
	figureColor: ChessColor,
	condition: (coordinates: Coordinates) => boolean,
	shift: (coordinates: Coordinates) => void,
	x: number,
	y: number
) => {
	const coordinates = {
		x,
		y,
	};

	while (condition(coordinates)) {
		shift(coordinates);
		const targetX = coordinates.x;
		const targetY = coordinates.y;
		const target = locations[`${targetX}${targetY}`];

		if (target && target.color === figureColor) {
			break;
		}

		if (target && target.color !== figureColor) {
			attackedSquares.push(`${targetX}${targetY}`);
			break;
		}

		attackedSquares.push(`${targetX}${targetY}`);
	}
};