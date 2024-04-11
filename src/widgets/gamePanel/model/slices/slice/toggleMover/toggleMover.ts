import { GamePanelSchema } from '../../../types/gamePanelSchema';

export const toggleMover = (state: GamePanelSchema) => {
	if (state.mover === 'white') {
		state.mover = 'black';
	} else {
		state.mover = 'white';
	}
};
