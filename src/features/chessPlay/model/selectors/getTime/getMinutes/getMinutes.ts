import { StateSchema } from '@/app/providers/StoreProvider';
import { ChessColor } from '@/entities/chessBoard';
import { createSelector } from '@reduxjs/toolkit';

export const getMinutes = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, color: ChessColor) => color,
	(state, color) => {
		const minutes = new Date(state.chessPlay.clocks[color].time).getMinutes();

		return minutes;
	}
);
