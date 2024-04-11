import { ChessColor } from '@/entities/chessBoard';

export const getPawnConsts = (x: number, y: number, figureColor: ChessColor) => {
	let firstCoordinateY;
	let nextSquareY;
	let next2SquareY;
	let takePassY;

	switch (figureColor) {
		case 'white':
			firstCoordinateY = 2;
			nextSquareY = y + 1;
			next2SquareY = y + 2;
			takePassY = 5;
			break;
		case 'black':
			firstCoordinateY = 7;
			nextSquareY = y - 1;
			next2SquareY = y - 2;
			takePassY = 4;
			break;
	}

	const nextStringCoordinates = `${x}${nextSquareY}`;
	const next2StringCoordinates = `${x}${next2SquareY}`;

	return {
		firstCoordinateY,
		nextSquareY,
		takePassY,
		nextStringCoordinates,
		next2StringCoordinates,
	};
};
