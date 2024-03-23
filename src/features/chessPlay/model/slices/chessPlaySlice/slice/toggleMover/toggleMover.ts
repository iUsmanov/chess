import { ChessPlaySchema } from '../../../../types/chessPlaySchema';

export const toggleMover = (state: ChessPlaySchema) => {
	if (state.mover === 'white') {
		state.mover = 'black';
	} else {
		state.mover = 'white';
	}
};
