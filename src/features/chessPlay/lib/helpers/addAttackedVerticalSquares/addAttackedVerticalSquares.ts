import { ChessColor, ChessLocations } from '@/entities/chessBoard';

export const addAttackedVerticalSquares = (
	attackedSquares: string[],
	locations: ChessLocations,
	figureColor: ChessColor,
	x: number,
	y: number
) => {
	for (let targetX = x + 1; targetX <= 8; targetX++) {
		const target = locations[`${targetX}${y}`];
		if (target && target.color === figureColor) {
			break;
		}

		if (target && target.color !== figureColor) {
			attackedSquares.push(`${targetX}${y}`);
			break;
		}

		attackedSquares.push(`${targetX}${y}`);
	}

	for (let targetX = x - 1; targetX >= 1; targetX--) {
		const target = locations[`${targetX}${y}`];
		if (target && target.color === figureColor) {
			break;
		}

		if (target && target.color !== figureColor) {
			attackedSquares.push(`${targetX}${y}`);
			break;
		}

		attackedSquares.push(`${targetX}${y}`);
	}
};
