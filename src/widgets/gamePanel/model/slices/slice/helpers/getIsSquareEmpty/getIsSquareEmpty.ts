import { ChessLocations } from '@/entities/board';

export const getIsSquareEmpty = (locations: ChessLocations, square: string): boolean => {
	if (locations[square]) {
		return false;
	} else {
		return true;
	}
};
