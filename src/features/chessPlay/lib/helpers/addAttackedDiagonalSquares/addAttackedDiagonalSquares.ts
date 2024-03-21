import { ChessColor, ChessLocations } from '@/entities/chessBoard';

export const addAttackedDiagonalSquares = (
	attackedSquares: string[],
	locations: ChessLocations,
	figureColor: ChessColor,
	x: number,
	y: number
) => {
	const targetCoordinates = {
		x: x + 1,
		y: y + 1,
	};

	while (targetCoordinates.x <= 8 && targetCoordinates.y <= 8) {
		const targetX = targetCoordinates.x;
		const targetY = targetCoordinates.y;
		const target = locations[`${targetX}${targetY}`];

		if (target && target.color === figureColor) {
			break;
		}

		if (target && target.color !== figureColor) {
			attackedSquares.push(`${targetX}${targetY}`);
			break;
		}

		attackedSquares.push(`${targetX}${targetY}`);
		// ======================
		targetCoordinates.x += 1;
		targetCoordinates.y += 1;
	}
	/* =================== */
	/* =================== */
	const targetCoordinates2 = {
		x: x - 1,
		y: y + 1,
	};

	while (targetCoordinates2.x >= 1 && targetCoordinates2.y <= 8) {
		const targetX = targetCoordinates2.x;
		const targetY = targetCoordinates2.y;
		const target = locations[`${targetX}${targetY}`];

		if (target && target.color === figureColor) {
			break;
		}

		if (target && target.color !== figureColor) {
			attackedSquares.push(`${targetX}${targetY}`);
			break;
		}

		attackedSquares.push(`${targetX}${targetY}`);
		// ======================
		targetCoordinates2.x -= 1;
		targetCoordinates2.y += 1;
	}
};
