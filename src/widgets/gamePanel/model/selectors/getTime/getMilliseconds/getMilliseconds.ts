import { StateSchema } from '@/app/providers/StoreProvider';
import { ChessColor } from '@/entities/chessBoard';
import { createSelector } from '@reduxjs/toolkit';

export const getMilliseconds = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, color: ChessColor) => color,
	(state, color) => {
		const milliseconds = new Date(state.gamePanel.clocks[color].time).getMilliseconds();

		return milliseconds;
	}
);
