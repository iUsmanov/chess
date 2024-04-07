import { StateSchema } from '@/app/providers/StoreProvider';
import { ChessColor } from '@/entities/chessBoard';
import { createSelector } from '@reduxjs/toolkit';

export const getSeconds = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, color: ChessColor) => color,
	(state, color) => {
		const seconds = new Date(state.chessPlay.clocks[color].time).getSeconds();

		return seconds;
	}
);
