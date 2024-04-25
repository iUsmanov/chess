import { GamePanelSchema } from '../../../../types/gamePanelSchema';
import { getIsSomeSquareAttackedByEnemy } from '../getIsSomeSquareAttackedByEnemy/getIsSomeSquareAttackedByEnemy';
import { getKingSquare } from '../getKingSquare/getKingSquare';

export const getIsCheck = (state: GamePanelSchema) => {
	// return Object.keys(state.locations).some((square) => {
	// 	const figure = state.locations[square];
	// 	if (figure.color !== state.mover) {
	// 		return figure.attackedSquares.includes(getKingSquare(state.mover, state.locations));
	// 	} else {
	// 		return false;
	// 	}
	// });

	return getIsSomeSquareAttackedByEnemy(state.locations, state.mover, [
		getKingSquare(state.mover, state.locations),
	]);
};
