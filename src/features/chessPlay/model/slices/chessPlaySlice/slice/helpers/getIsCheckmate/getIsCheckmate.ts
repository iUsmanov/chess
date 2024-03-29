import { ChessPlaySchema } from '../../../../../types/chessPlaySchema';

export const getIsCheckmate = (state: ChessPlaySchema) => {
	return Object.keys(state.locations).every((square) => {
		const figure = state.locations[square];
		if (figure.color === state.mover) {
			return figure.attackedSquares.length === 0;
		} else {
			return true;
		}
	});
};
