import { FiguresLocations, ChessMove } from '@/entities/board';
import { pawnMechanism } from '../figuresMechanisms/pawn/pawn';
import { knightMechanism } from '../figuresMechanisms/knight';
import { kingMechanism } from '../figuresMechanisms/king';
import { addAttackedAxles } from '../addAttackedAxles/addAttackedAxles';
import { addAttackedDiagonals } from '../addAttackedDiagonals/addAttackedDiagonals';

export const addFiguresMechanisms = (
	square: string,
	attackedSquares: string[],
	locations: FiguresLocations,
	history?: ChessMove[]
) => {
	switch (locations[square].name) {
		case 'pawn':
			pawnMechanism(square, attackedSquares, locations, history);
			break;
		case 'knight':
			knightMechanism(square, attackedSquares, locations);
			break;
		case 'king':
			kingMechanism(square, attackedSquares, locations, history);
			break;
		case 'rook':
			addAttackedAxles(square, attackedSquares, locations);
			break;
		case 'queen':
			addAttackedAxles(square, attackedSquares, locations);
			addAttackedDiagonals(square, attackedSquares, locations);
			break;
		case 'bishop':
			addAttackedDiagonals(square, attackedSquares, locations);
	}
};
