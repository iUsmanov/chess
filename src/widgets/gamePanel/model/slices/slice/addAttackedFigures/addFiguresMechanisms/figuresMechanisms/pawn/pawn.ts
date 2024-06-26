import { FiguresLocations, ChessMove } from '@/entities/board';
import { getPawnConsts } from './getPawnConsts/getPawnConsts';

export const pawnMechanism = (
	square: string,
	attackedSquares: string[],
	locations: FiguresLocations,
	history?: ChessMove[]
) => {
	const { color: figureColor } = locations[square];
	const x = Number(square[0]);
	const y = Number(square[1]);
	const { firstCoordinateY, next2StringCoordinates, nextSquareY, nextStringCoordinates, takePassY } =
		getPawnConsts(x, y, figureColor);
	const lastMove = history?.[history.length - 1];

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

	// Взятие на проходе
	if (lastMove) {
		const lastMoveToX = Number(lastMove.to[0]);
		const lastMoveToY = Number(lastMove.to[1]);
		const lastMoveFromY = Number(lastMove.from[1]);

		if (
			y === takePassY &&
			y === lastMoveToY &&
			Math.abs(x - lastMoveToX) === 1 &&
			Math.abs(y - lastMoveFromY) === 2
		) {
			const lastMovedFigure = locations[lastMove.to];
			if (lastMovedFigure.name === 'pawn') {
				attackedSquares.push(`${lastMoveToX}${nextSquareY}`);
			}
		}
	}
};
