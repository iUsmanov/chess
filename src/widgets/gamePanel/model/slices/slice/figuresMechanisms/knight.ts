import { FiguresLocations } from '@/entities/board';
import { getSquareIsExists } from '../helpers/getSquareIsExists/getSquareIsExists';

export const knightMechanism = (
	square: string,
	attackedSquares: string[],
	locations: FiguresLocations
) => {
	const { color: figureColor } = locations[square];
	const x = Number(square[0]);
	const y = Number(square[1]);

	for (let differenceX = -2; differenceX <= 2; differenceX++) {
		if (differenceX === 0) continue;
		for (let differenceY = -2; differenceY <= 2; differenceY++) {
			if (
				differenceY === 0 ||
				(Math.abs(differenceX - differenceY) !== 1 && Math.abs(differenceX - differenceY) !== 3)
			)
				continue;

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

// export const knightMechanism = (
// 	square: string,
// 	attackedSquares: string[],
// 	locations: FiguresLocations
// ) => {
// 	const { color: figureColor } = locations[square];
// 	const x = Number(square[0]);
// 	const y = Number(square[1]);

// 	const coords: Coordinates[] = [
// 		{
// 			x: x + 2,
// 			y: y + 1,
// 		},
// 		{
// 			x: x + 1,
// 			y: y + 2,
// 		},
// 		{
// 			x: x + 2,
// 			y: y - 1,
// 		},
// 		{
// 			x: x + 1,
// 			y: y - 2,
// 		},
// 		{
// 			x: x - 2,
// 			y: y - 1,
// 		},
// 		{
// 			x: x - 1,
// 			y: y - 2,
// 		},
// 		{
// 			x: x - 2,
// 			y: y + 1,
// 		},
// 		{
// 			x: x - 1,
// 			y: y + 2,
// 		},
// 	];

// 	Object.values(coords).forEach((coordinates) => {
// 		const stringCoordinates = `${coordinates.x}${coordinates.y}`;
// 		if (getSquareIsExists(coordinates)) {
// 			if (!locations[stringCoordinates] || locations[stringCoordinates].color !== figureColor) {
// 				attackedSquares.push(stringCoordinates);
// 			}
// 		}
// 	});
// };
