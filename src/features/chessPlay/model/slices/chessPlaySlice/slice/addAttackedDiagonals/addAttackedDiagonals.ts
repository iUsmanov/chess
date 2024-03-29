import { ChessLocations } from '@/entities/chessBoard';
import { addAttackedDirection } from '../addAttackedDirection/addAttackedDirection';
import { Coordinates } from '@/entities/chessBoard';

export const addAttackedDiagonals = (
	square: string,
	attackedSquares: string[],
	locations: ChessLocations
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

	addAttackedDirection(square, attackedSquares, locations, canShiftToRightTop, shiftToRightTop);
	/* LEFT TOP */
	/* LEFT TOP */
	/* LEFT TOP */
	/* LEFT TOP */

	const shiftToLeftTop = (coordinates: Coordinates) => {
		coordinates.x -= 1;
		coordinates.y += 1;
	};

	const canShiftToLeftTop = (coordinates: Coordinates) => coordinates.x > 1 && coordinates.y < 8;

	addAttackedDirection(square, attackedSquares, locations, canShiftToLeftTop, shiftToLeftTop);

	/* LEFT BOTTOM */
	/* LEFT BOTTOM */
	/* LEFT BOTTOM */
	/* LEFT BOTTOM */

	const shiftToLeftBottom = (coordinates: Coordinates) => {
		coordinates.x -= 1;
		coordinates.y -= 1;
	};

	const canShiftToLeftBottom = (coordinates: Coordinates) => coordinates.x > 1 && coordinates.y > 1;

	addAttackedDirection(square, attackedSquares, locations, canShiftToLeftBottom, shiftToLeftBottom);

	/* RIGHT BOTTOM */
	/* RIGHT BOTTOM */
	/* RIGHT BOTTOM */
	/* RIGHT BOTTOM */

	const shiftToRightBottom = (coordinates: Coordinates) => {
		coordinates.x += 1;
		coordinates.y -= 1;
	};

	const canShiftToRightBottom = (coordinates: Coordinates) => coordinates.x < 8 && coordinates.y > 1;

	addAttackedDirection(square, attackedSquares, locations, canShiftToRightBottom, shiftToRightBottom);
};
