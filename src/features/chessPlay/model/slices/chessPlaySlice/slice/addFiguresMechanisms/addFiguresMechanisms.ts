import { ChessLocations } from '@/entities/chessBoard';
import { Figure } from '@/entities/chessBoard';
import { pawnMechanism } from '../figuresMechanisms/pawn';
import { knightMechanism } from '../figuresMechanisms/knight';
import { kingMechanism } from '../figuresMechanisms/king';
import { addAttackedAxles } from '../addAttackedAxles/addAttackedAxles';
import { addAttackedDiagonals } from '../addAttackedDiagonals/addAttackedDiagonals';

export const addFiguresMechanisms = (
	x: number,
	y: number,
	attackedSquares: string[],
	locations: ChessLocations,
	figure: Figure
) => {
	const figureColor = figure.color;
	switch (figure.name) {
		case 'pawn':
			pawnMechanism(x, y, attackedSquares, locations, figureColor);
			break;
		case 'knight':
			knightMechanism(x, y, attackedSquares, locations, figureColor);
			break;
		case 'king':
			kingMechanism(x, y, attackedSquares, locations, figureColor);
			break;
		case 'rook':
			addAttackedAxles(x, y, attackedSquares, locations, figureColor);
			break;
		case 'queen':
			addAttackedAxles(x, y, attackedSquares, locations, figureColor);
			addAttackedDiagonals(x, y, attackedSquares, locations, figureColor);
			break;
		case 'bishop':
			addAttackedDiagonals(x, y, attackedSquares, locations, figureColor);
	}
};
