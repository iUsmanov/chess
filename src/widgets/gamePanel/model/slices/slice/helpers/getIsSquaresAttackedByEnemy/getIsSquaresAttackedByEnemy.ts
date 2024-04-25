import { FigureColor, FiguresLocations } from '@/entities/board';

export const getIsSquaresAttackedByEnemy = (
	locations: FiguresLocations,
	figureColor: FigureColor,
	squares: string[]
) => {
	return Object.keys(locations).some((square) => {
		const figure = locations[square];
		if (figure.color !== figureColor) {
			return squares.some((squareMaybeAttacked) => {
				return figure.attackedSquares.includes(squareMaybeAttacked);
			});
		} else {
			return false;
		}
	});
};
