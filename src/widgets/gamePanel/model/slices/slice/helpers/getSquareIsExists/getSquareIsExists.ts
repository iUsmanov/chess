import { Coordinates } from '@/entities/board';

export const getSquareIsExists = (coordinates: Coordinates) => {
	if (coordinates.x >= 1 && coordinates.x <= 8 && coordinates.y >= 1 && coordinates.y <= 8) {
		return true;
	}
};
