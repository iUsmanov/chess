import { FiguresLocations } from '@/entities/board';
import { getSquareIsExists } from '../helpers/getSquareIsExists/getSquareIsExists';

export const kingMechanism = (
	square: string,
	attackedSquares: string[],
	locations: FiguresLocations
) => {
	const { color: figureColor } = locations[square];
	const x = Number(square[0]);
	const y = Number(square[1]);

	for (let differenceX = -1; differenceX <= 1; differenceX++) {
		for (let differenceY = -1; differenceY <= 1; differenceY++) {
			const newX = x + differenceX;
			const newY = y + differenceY;
			const stringCoordinates = `${newX}${newY}`;
			if (getSquareIsExists({ x: newX, y: newY })) {
				if (!locations[stringCoordinates] || locations[stringCoordinates].color !== figureColor) {
					attackedSquares.push(stringCoordinates);
				}
			}
		}
	}
};

/* 

Если в истории нет хода, который начинается с e1 или заканчивается им
Если в истории нет хода, который начинается с a1 или заканчивается им
Если клетки b1, c1, d1 - пустые
Если клетки c1, d1, e1 - не атакованы врагом

*/

/* 

export const kingMechanism = (square: string, attackedSquares: string[], locations: FiguresLocations) => {
	const { color: figureColor } = locations[square];
	const x = Number(square[0]);
	const y = Number(square[1]);

	const coords: Coordinates[] = [
		{
			x: x + 1,
			y: y + 1,
		},
		{
			x: x - 1,
			y: y - 1,
		},
		{
			x: x + 1,
			y: y - 1,
		},
		{
			x: x - 1,
			y: y + 1,
		},
		{
			x,
			y: y + 1,
		},
		{
			x,
			y: y - 1,
		},
		{
			x: x + 1,
			y,
		},
		{
			x: x - 1,
			y,
		},
	];

	Object.values(coords).forEach((coordinates) => {
		const stringCoordinates = `${coordinates.x}${coordinates.y}`;
		if (getSquareIsExists(coordinates)) {
			if (!locations[stringCoordinates] || locations[stringCoordinates].color !== figureColor) {
				attackedSquares.push(stringCoordinates);
			}
		}
	});
};


*/
