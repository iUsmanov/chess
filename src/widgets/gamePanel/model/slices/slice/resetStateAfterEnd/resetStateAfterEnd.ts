import { GamePanelSchema } from '../../../types/gamePanelSchema';

export const resetStateAfterEnd = (state: GamePanelSchema) => {
	state.isGameOn = false;
	state.availableSquares = [];
	state.isCheck = false;
	state.selectedSquare = undefined;
	state.clocks.black.startTiming = undefined;
	state.clocks.white.startTiming = undefined;
};