import { ChessColor, ChessLocations } from '@/entities/chessBoard';
import { Coordinates } from '@/entities/chessBoard';
import { addAttackedDirection } from '../addAttackedDirection/addAttackedDirection';

export const addAttackedAxles = (
	x: number,
	y: number,
	attackedSquares: string[],
	locations: ChessLocations,
	figureColor: ChessColor
) => {
	// RIGHTS
	// RIGHTS
	// RIGHTS
	// RIGHTS
	const shiftToRight = (coordinates: Coordinates) => {
		coordinates.x += 1;
	};

	const canShiftToRight = (coordinates: Coordinates) => coordinates.x < 8;

	addAttackedDirection(x, y, attackedSquares, locations, figureColor, canShiftToRight, shiftToRight);
	// LEFTS
	// LEFTS
	// LEFTS
	// LEFTS
	const shiftToLeft = (coordinates: Coordinates) => {
		coordinates.x -= 1;
	};

	const canShiftToLeft = (coordinates: Coordinates) => coordinates.x > 1;

	addAttackedDirection(x, y, attackedSquares, locations, figureColor, canShiftToLeft, shiftToLeft);

	// TOP
	// TOP
	// TOP
	// TOP
	const shiftToTop = (coordinates: Coordinates) => {
		coordinates.y += 1;
	};

	const canShiftToTop = (coordinates: Coordinates) => coordinates.y < 8;

	addAttackedDirection(x, y, attackedSquares, locations, figureColor, canShiftToTop, shiftToTop);
	// BOTTOM
	// BOTTOM
	// BOTTOM
	// BOTTOM
	const shiftToBottom = (coordinates: Coordinates) => {
		coordinates.y -= 1;
	};

	const canShiftToBottom = (coordinates: Coordinates) => coordinates.y > 1;

	addAttackedDirection(x, y, attackedSquares, locations, figureColor, canShiftToBottom, shiftToBottom);
};
