import { ChessMove, FiguresLocations } from '@/entities/board';
import { getSquareIsExists } from '../helpers/getSquareIsExists/getSquareIsExists';
import { getIsSquaresAttackedByEnemy } from '../helpers/getIsSquaresAttackedByEnemy/getIsSquaresAttackedByEnemy';

export const kingMechanism = (
	square: string,
	attackedSquares: string[],
	locations: FiguresLocations,
	history?: ChessMove[]
) => {
	const { color: figureColor } = locations[square];
	const x = Number(square[0]);
	const y = Number(square[1]);
	const homeY = figureColor === 'white' ? '1' : '8';

	const kingDidNotMove = history?.every((move) => {
		if (move.from !== `5${homeY}`) {
			return true;
		}
	});

	const queensideRookDidNotMove = history?.every((move) => {
		if (move.from !== `1${homeY}` && move.to !== `1${homeY}`) {
			return true;
		}
	});

	const kingsideRookDidNotMove = history?.every((move) => {
		if (move.from !== `8${homeY}` && move.to !== `8${homeY}`) {
			return true;
		}
	});

	if (
		kingDidNotMove &&
		queensideRookDidNotMove &&
		!locations[`2${homeY}`] &&
		!locations[`3${homeY}`] &&
		!locations[`4${homeY}`] &&
		!getIsSquaresAttackedByEnemy(locations, figureColor, [`3${homeY}`, `4${homeY}`, `5${homeY}`])
	) {
		attackedSquares.push(`3${homeY}`);
	}

	if (
		kingDidNotMove &&
		kingsideRookDidNotMove &&
		!locations[`6${homeY}`] &&
		!locations[`7${homeY}`] &&
		!getIsSquaresAttackedByEnemy(locations, figureColor, [`5${homeY}`, `6${homeY}`, `7${homeY}`])
	) {
		attackedSquares.push(`7${homeY}`);
	}

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
