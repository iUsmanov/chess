import { GamePanelSchema } from '../../../../types/gamePanelSchema';

export const getIsCheckmate = (state: GamePanelSchema) => {
	return Object.keys(state.locations).every((square) => {
		const figure = state.locations[square];
		if (figure.color === state.mover) {
			return figure.attackedSquares.length === 0;
		} else {
			return true;
		}
	});
};
