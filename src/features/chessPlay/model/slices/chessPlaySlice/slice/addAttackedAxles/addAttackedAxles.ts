import { ChessColor, ChessLocations } from '@/entities/chessBoard';
import { Coordinates } from '../../../../../model/types/chessPlay';
import { addAttackedDirection } from '../addAttackedDirection/addAttackedDirection';

export const addAttackedAxles = (
	attackedSquares: string[],
	locations: ChessLocations,
	figureColor: ChessColor,
	x: number,
	y: number
) => {
	// RIGHTS
	// RIGHTS
	// RIGHTS
	// RIGHTS
	const shiftToRight = (coordinates: Coordinates) => {
		coordinates.x += 1;
	};

	const canShiftToRight = (coordinates: Coordinates) => coordinates.x < 8;

	addAttackedDirection(attackedSquares, locations, figureColor, canShiftToRight, shiftToRight, x, y);
	// LEFTS
	// LEFTS
	// LEFTS
	// LEFTS
	const shiftToLeft = (coordinates: Coordinates) => {
		coordinates.x -= 1;
	};

	const canShiftToLeft = (coordinates: Coordinates) => coordinates.x > 1;

	addAttackedDirection(attackedSquares, locations, figureColor, canShiftToLeft, shiftToLeft, x, y);

	// TOP
	// TOP
	// TOP
	// TOP
	const shiftToTop = (coordinates: Coordinates) => {
		coordinates.y += 1;
	};

	const canShiftToTop = (coordinates: Coordinates) => coordinates.y < 8;

	addAttackedDirection(attackedSquares, locations, figureColor, canShiftToTop, shiftToTop, x, y);
	// BOTTOM
	// BOTTOM
	// BOTTOM
	// BOTTOM
	const shiftToBottom = (coordinates: Coordinates) => {
		coordinates.y -= 1;
	};

	const canShiftToBottom = (coordinates: Coordinates) => coordinates.y > 1;

	addAttackedDirection(attackedSquares, locations, figureColor, canShiftToBottom, shiftToBottom, x, y);
};
