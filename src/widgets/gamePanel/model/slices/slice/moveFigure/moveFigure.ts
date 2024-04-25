import { GamePanelSchema } from '../../../types/gamePanelSchema';
import { rookJump } from '../rookJump/rookJump';
import { takePass } from '../takePass/takePass';

export const moveFigure = (state: GamePanelSchema, clickedSquare: string) => {
	if (!state.selectedSquare) return;
	takePass(state, state.locations, state.selectedSquare, clickedSquare);
	takePass(state, state.mockLocations, state.selectedSquare, clickedSquare);
	rookJump(state, state.locations, state.selectedSquare, clickedSquare);
	rookJump(state, state.mockLocations, state.selectedSquare, clickedSquare);
	// =============
	state.locations[clickedSquare] = state.locations[state.selectedSquare];
	delete state.locations[state.selectedSquare];
	// =============
	state.mockLocations[clickedSquare] = state.mockLocations[state.selectedSquare];
	delete state.mockLocations[state.selectedSquare];
};
