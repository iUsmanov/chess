import { GameResultReason, GameResultWinner } from '@/entities/board';
import { GamePanelSchema } from '../../../types/gamePanelSchema';
import { resetStateAfterEnd } from '../resetStateAfterEnd/resetStateAfterEnd';

export const finishGame = (
	state: GamePanelSchema,
	reason: GameResultReason,
	winner: GameResultWinner
) => {
	state.gameResult = {
		reason,
		winner,
	};

	resetStateAfterEnd(state);
};
