import { FigureColor } from '@/entities/board';

export const getEnemy = (mover: FigureColor) => {
	if (mover === 'white') {
		return 'black';
	} else {
		return 'white';
	}
};
