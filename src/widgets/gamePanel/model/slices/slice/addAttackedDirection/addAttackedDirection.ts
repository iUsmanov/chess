import { ChessLocations } from '@/entities/board';
import { Coordinates } from '@/entities/board';

export const addAttackedDirection = (
	square: string,
	attackedSquares: string[],
	locations: ChessLocations,
	condition: (coordinates: Coordinates) => boolean,
	shift: (coordinates: Coordinates) => void
) => {
	const { color: figureColor } = locations[square];
	const x = Number(square[0]);
	const y = Number(square[1]);

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
