import { ChessColor } from '../../../model/types/board';

export const getEnemy = (mover: ChessColor) => {
	if (mover === 'white') {
		return 'black';
	} else {
		return 'white';
	}
};
