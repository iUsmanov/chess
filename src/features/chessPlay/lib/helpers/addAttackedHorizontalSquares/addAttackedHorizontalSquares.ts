import { ChessColor, ChessLocations } from '@/entities/chessBoard';

export const addAttackedHorizontalSquares = (
	attackedSquares: string[],
	locations: ChessLocations,
	figureColor: ChessColor,
	x: number,
	y: number
) => {
	for (let targetY = y + 1; targetY <= 8; targetY++) {
		const target = locations[`${x}${targetY}`];
		if (target && target.color === figureColor) {
			break;
		}

		if (target && target.color !== figureColor) {
			attackedSquares.push(`${x}${targetY}`);
			break;
		}

		attackedSquares.push(`${x}${targetY}`);
	}

	for (let targetY = y - 1; targetY >= 1; targetY--) {
		const target = locations[`${x}${targetY}`];
		if (target && target.color === figureColor) {
			break;
		}

		if (target && target.color !== figureColor) {
			attackedSquares.push(`${x}${targetY}`);
			break;
		}

		attackedSquares.push(`${x}${targetY}`);
	}
};
