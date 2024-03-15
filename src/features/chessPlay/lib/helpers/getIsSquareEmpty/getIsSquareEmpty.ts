import { ChessLocations } from '@/entities/chessBoard';

export const getIsSquareEmpty = (locations: ChessLocations, square: string): boolean => {
	if (locations[square]) {
		return false;
	} else {
		return true;
	}
};
