import { FiguresLocations } from '@/entities/board';

export const getIsSquareEmpty = (locations: FiguresLocations, square: string): boolean => {
	if (locations[square]) {
		return false;
	} else {
		return true;
	}
};
