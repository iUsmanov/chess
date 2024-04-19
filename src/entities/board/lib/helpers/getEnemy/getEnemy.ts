import { FigureColor } from '../../../model/types/board';

export const getEnemy = (mover: FigureColor) => {
	if (mover === 'white') {
		return 'black';
	} else {
		return 'white';
	}
};
