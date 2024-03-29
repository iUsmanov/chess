import { ChessLocations } from '@/entities/chessBoard';
import { getPawnConsts } from './getPawnConsts/getPawnConsts';

export const pawnMechanism = (square: string, attackedSquares: string[], locations: ChessLocations) => {
	const { color: figureColor } = locations[square];
	const x = Number(square[0]);
	const y = Number(square[1]);
	const { firstCoordinateY, next2StringCoordinates, nextSquareY, nextStringCoordinates, takePassY } =
		getPawnConsts(x, y, figureColor);

	if (!locations[nextStringCoordinates]) {
		attackedSquares.push(nextStringCoordinates);

		if (y === firstCoordinateY && !locations[next2StringCoordinates]) {
			attackedSquares.push(next2StringCoordinates);
		}
	}
	// =======================
	// =======================
	// =======================
	const addAttackedAndBusySquaresByPawn = (nextSquareX: number, nextSquareY: number) => {
		const stringCoordinates = `${nextSquareX}${nextSquareY}`;

		if (locations[stringCoordinates] && locations[stringCoordinates].color !== figureColor) {
			attackedSquares.push(`${nextSquareX}${nextSquareY}`);
		}
	};

	if (x > 1) {
		const nextSquareX = x - 1;
		addAttackedAndBusySquaresByPawn(nextSquareX, nextSquareY);
	}

	if (x < 8) {
		const nextSquareX = x + 1;
		addAttackedAndBusySquaresByPawn(nextSquareX, nextSquareY);
	}

	// if(y === takePassY && lastMove.to.y === y && (Math.abs(x - lastMove.to.x) === 1)) {
	// 	const lastMovedFigure = locations[lastMove.to.x + lastMove.to.y]
	// 	if(lastMovedFigure.name === 'pawn') {
	// 		attackedSquares.push(`${lastMove.to.x}${y}`);
	// 		delete locations[lastMovedFigure]
	// 	}
	// }
};
