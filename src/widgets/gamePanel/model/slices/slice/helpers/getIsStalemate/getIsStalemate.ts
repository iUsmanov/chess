import { GamePanelSchema } from '../../../../types/gamePanelSchema';
import { getIsCheck } from '../getIsCheck/getIsCheck';

export const getIsStalemate = (state: GamePanelSchema) => {
	if (getIsCheck(state)) return false;
	return Object.keys(state.locations).every((square) => {
		const figure = state.locations[square];
		if (figure.color === state.mover) {
			return figure.attackedSquares.length === 0;
		} else {
			return true;
		}
	});
};
