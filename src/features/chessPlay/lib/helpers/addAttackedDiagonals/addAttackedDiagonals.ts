import { ChessColor, ChessLocations } from '@/entities/chessBoard';
import { addAttackedDirection } from '../addAttackedDirection/addAttackedDirection';
import { Coordinates } from '../../../model/types/chessPlay';

export const addAttackedDiagonals = (
	attackedSquares: string[],
	locations: ChessLocations,
	figureColor: ChessColor,
	x: number,
	y: number
) => {
	/* RIGHT TOP */
	/* RIGHT TOP */
	/* RIGHT TOP */
	/* RIGHT TOP */

	const shiftToRightTop = (coordinates: Coordinates) => {
		coordinates.x += 1;
		coordinates.y += 1;
	};

	const canShiftToRightTop = (coordinates: Coordinates) => coordinates.x < 8 && coordinates.y < 8;

	addAttackedDirection(
		attackedSquares,
		locations,
		figureColor,
		canShiftToRightTop,
		shiftToRightTop,
		x,
		y
	);
	/* LEFT TOP */
	/* LEFT TOP */
	/* LEFT TOP */
	/* LEFT TOP */

	const shiftToLeftTop = (coordinates: Coordinates) => {
		coordinates.x -= 1;
		coordinates.y += 1;
	};

	const canShiftToLeftTop = (coordinates: Coordinates) => coordinates.x > 1 && coordinates.y < 8;

	addAttackedDirection(
		attackedSquares,
		locations,
		figureColor,
		canShiftToLeftTop,
		shiftToLeftTop,
		x,
		y
	);

	/* LEFT BOTTOM */
	/* LEFT BOTTOM */
	/* LEFT BOTTOM */
	/* LEFT BOTTOM */

	const shiftToLeftBottom = (coordinates: Coordinates) => {
		coordinates.x -= 1;
		coordinates.y -= 1;
	};

	const canShiftToLeftBottom = (coordinates: Coordinates) => coordinates.x > 1 && coordinates.y > 1;

	addAttackedDirection(
		attackedSquares,
		locations,
		figureColor,
		canShiftToLeftBottom,
		shiftToLeftBottom,
		x,
		y
	);

	/* RIGHT BOTTOM */
	/* RIGHT BOTTOM */
	/* RIGHT BOTTOM */
	/* RIGHT BOTTOM */

	const shiftToRightBottom = (coordinates: Coordinates) => {
		coordinates.x += 1;
		coordinates.y -= 1;
	};

	const canShiftToRightBottom = (coordinates: Coordinates) => coordinates.x < 8 && coordinates.y > 1;

	addAttackedDirection(
		attackedSquares,
		locations,
		figureColor,
		canShiftToRightBottom,
		shiftToRightBottom,
		x,
		y
	);
};
