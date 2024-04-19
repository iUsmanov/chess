import { ChessColor, ChessLocations } from '@/entities/board';

export const getKingSquare = (color: ChessColor, locations: ChessLocations): string => {
	let moverKingSquare = '';
	Object.keys(locations).forEach((square) => {
		const { name: figureName, color: figureColor } = locations[square];
		if (figureName === 'king' && figureColor === color) {
			moverKingSquare = square;
			return;
		}
	});
	return moverKingSquare;
};
