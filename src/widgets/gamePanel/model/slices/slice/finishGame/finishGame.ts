import { GameResultReason, GameResultWinner } from '@/entities/board';
import { GamePanelSchema } from '../../../types/gamePanelSchema';

export const finishGame = (
	state: GamePanelSchema,
	reason: GameResultReason,
	winner: GameResultWinner
) => {
	state.gameResult = {
		reason,
		winner,
	};

	state.isGameOn = false;
	state.availableSquares = [];
	state.isCheck = false;
	state.selectedSquare = undefined;
	state.clocks.black.startTiming = undefined;
	state.clocks.white.startTiming = undefined;
};
