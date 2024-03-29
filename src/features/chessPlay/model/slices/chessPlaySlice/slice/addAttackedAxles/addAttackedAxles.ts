import { ChessLocations } from '@/entities/chessBoard';
import { Coordinates } from '@/entities/chessBoard';
import { addAttackedDirection } from '../addAttackedDirection/addAttackedDirection';

export const addAttackedAxles = (
	square: string,
	attackedSquares: string[],
	locations: ChessLocations
) => {
	// RIGHTS
	// RIGHTS
	// RIGHTS
	// RIGHTS
	const shiftToRight = (coordinates: Coordinates) => {
		coordinates.x += 1;
	};

	const canShiftToRight = (coordinates: Coordinates) => coordinates.x < 8;

	addAttackedDirection(square, attackedSquares, locations, canShiftToRight, shiftToRight);
	// LEFTS
	// LEFTS
	// LEFTS
	// LEFTS
	const shiftToLeft = (coordinates: Coordinates) => {
		coordinates.x -= 1;
	};

	const canShiftToLeft = (coordinates: Coordinates) => coordinates.x > 1;

	addAttackedDirection(square, attackedSquares, locations, canShiftToLeft, shiftToLeft);

	// TOP
	// TOP
	// TOP
	// TOP
	const shiftToTop = (coordinates: Coordinates) => {
		coordinates.y += 1;
	};

	const canShiftToTop = (coordinates: Coordinates) => coordinates.y < 8;

	addAttackedDirection(square, attackedSquares, locations, canShiftToTop, shiftToTop);
	// BOTTOM
	// BOTTOM
	// BOTTOM
	// BOTTOM
	const shiftToBottom = (coordinates: Coordinates) => {
		coordinates.y -= 1;
	};

	const canShiftToBottom = (coordinates: Coordinates) => coordinates.y > 1;

	addAttackedDirection(square, attackedSquares, locations, canShiftToBottom, shiftToBottom);
};
