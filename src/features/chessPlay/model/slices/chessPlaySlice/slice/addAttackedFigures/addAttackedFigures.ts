import { ChessPlaySchema } from '../../../../types/chessPlaySchema';
import { addAttackedAxles } from '../addAttackedAxles/addAttackedAxles';
import { addAttackedDiagonals } from '../addAttackedDiagonals/addAttackedDiagonals';
import { kingMechanism } from '../figuresMechanisms/king';
import { knightMechanism } from '../figuresMechanisms/knight';
import { pawnMechanism } from '../figuresMechanisms/pawn';

export const addAttackedFigures = (state: ChessPlaySchema) => {
	Object.keys(state.locations).forEach((square) => {
		const figure = state.locations[square];
		const figureColor = figure.color;
		const x = Number(square[0]);
		const y = Number(square[1]);
		state.locations[square].attackedSquares = [];
		const attackedSquares: string[] = [];

		switch (figure.name) {
			case 'pawn':
				pawnMechanism(state, figureColor, attackedSquares, x, y);
				break;
			case 'rook':
				addAttackedAxles(attackedSquares, state.locations, figureColor, x, y);
				break;
			case 'queen':
				addAttackedAxles(attackedSquares, state.locations, figureColor, x, y);
				addAttackedDiagonals(attackedSquares, state.locations, figureColor, x, y);
				break;
			case 'knight':
				knightMechanism(state, figureColor, attackedSquares, x, y);
				break;
			case 'king':
				kingMechanism(state, figureColor, attackedSquares, x, y);
				break;
			case 'bishop':
				addAttackedDiagonals(attackedSquares, state.locations, figureColor, x, y);
		}
		state.locations[square].attackedSquares.push(...attackedSquares);
	});
};
