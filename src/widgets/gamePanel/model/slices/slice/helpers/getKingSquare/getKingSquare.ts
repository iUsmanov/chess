import { FigureColor, FiguresLocations } from '@/entities/board';

export const getKingSquare = (color: FigureColor, locations: FiguresLocations): string => {
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
