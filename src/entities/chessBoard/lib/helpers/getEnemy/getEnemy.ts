import { ChessColor } from '../../../model/types/chessBoard';

export const getEnemy = (mover: ChessColor) => {
	if (mover === 'white') {
		return 'black';
	} else {
		return 'white';
	}
};
