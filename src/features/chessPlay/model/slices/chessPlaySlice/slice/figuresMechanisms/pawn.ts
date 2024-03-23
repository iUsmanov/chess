import { ChessColor, ChessLocations } from '@/entities/chessBoard';

export const pawnMechanism = (
	locations: ChessLocations,
	figureColor: ChessColor,
	attackedSquares: string[],
	x: number,
	y: number
) => {
	let firstCoordinateY;
	let nextSquareY;
	let next2SquareY;

	switch (figureColor) {
		case 'white':
			firstCoordinateY = 2;
			nextSquareY = y + 1;
			next2SquareY = y + 2;
			break;
		case 'black':
			firstCoordinateY = 7;
			nextSquareY = y - 1;
			next2SquareY = y - 2;
			break;
	}

	const nextStringCoordinates = `${x}${nextSquareY}`;
	const next2StringCoordinates = `${x}${next2SquareY}`;

	if (!locations[nextStringCoordinates]) {
		attackedSquares.push(nextStringCoordinates);

		if (y === firstCoordinateY && !locations[next2StringCoordinates]) {
			attackedSquares.push(next2StringCoordinates);
		}
	}
	// =======================
	// =======================
	// =======================
	const newY = figureColor === 'white' ? y + 1 : y - 1;
	if (x > 1) {
		const newX = x - 1;
		const stringCoordinates = `${newX}${newY}`;

		if (locations[stringCoordinates] && locations[stringCoordinates].color !== figureColor) {
			attackedSquares.push(`${newX}${newY}`);
		}
	}

	if (x < 8) {
		const newX = x + 1;
		const stringCoordinates = `${newX}${newY}`;

		if (locations[stringCoordinates] && locations[stringCoordinates].color !== figureColor) {
			attackedSquares.push(`${newX}${newY}`);
		}
	}
};
