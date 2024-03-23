import { ChessColor, ChessLocations } from '@/entities/chessBoard';
import { addAttackedDirection } from '../addAttackedDirection/addAttackedDirection';
import { Coordinates } from '@/entities/chessBoard';

export const addAttackedDiagonals = (
	x: number,
	y: number,
	attackedSquares: string[],
	locations: ChessLocations,
	figureColor: ChessColor
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
		x,
		y,
		attackedSquares,
		locations,
		figureColor,
		canShiftToRightTop,
		shiftToRightTop
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
		x,
		y,
		attackedSquares,
		locations,
		figureColor,
		canShiftToLeftTop,
		shiftToLeftTop
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
		x,
		y,
		attackedSquares,
		locations,
		figureColor,
		canShiftToLeftBottom,
		shiftToLeftBottom
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
		x,
		y,
		attackedSquares,
		locations,
		figureColor,
		canShiftToRightBottom,
		shiftToRightBottom
	);
};
