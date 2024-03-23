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
				pawnMechanism(state.locations, figureColor, attackedSquares, x, y);
				break;
			case 'knight':
				knightMechanism(state.locations, figureColor, attackedSquares, x, y);
				break;
			case 'king':
				kingMechanism(state.locations, figureColor, attackedSquares, x, y);
				break;
			case 'rook':
				addAttackedAxles(x, y, attackedSquares, state.locations, figureColor);
				break;
			case 'queen':
				addAttackedAxles(x, y, attackedSquares, state.locations, figureColor);
				addAttackedDiagonals(x, y, attackedSquares, state.locations, figureColor);
				break;

			case 'bishop':
				addAttackedDiagonals(x, y, attackedSquares, state.locations, figureColor);
		}
		// if (state.mover !== figure.color) {
		state.locations[square].attackedSquares.push(...attackedSquares);
		// 	state.mockLocations[square].attackedSquares.push(...attackedSquares);
		// } else {
		// 	state.mockLocations[square].attackedSquares.push(...attackedSquares);
		// }
	});
	// ====================
	// ====================
	// ====================
	// ====================

	Object.keys(state.locations).forEach((square) => {});

	// После того, как кто-то сделал ход
	// Фигуры ч-ка, сделавшего ход обработать обычным образом

	// А вот с фигурами того, кому надо сделать ход немного иначе

	// Сделать каждый возможный ход
	// И если при таком сделанном ходе его король не попадает под атаку
	// То добавить этот ход в attackedSquares соответствующей фигуры
};
