import { GamePanelSchema } from '../../../../types/gamePanelSchema';
import { getKingSquare } from '../getKingSquare/getKingSquare';

export const getIsCheck = (state: GamePanelSchema) => {
	return Object.keys(state.locations).some((square) => {
		const figure = state.locations[square];
		if (figure.color !== state.mover) {
			return figure.attackedSquares.includes(getKingSquare(state.mover, state.locations));
		} else {
			return false;
		}
	});
};
