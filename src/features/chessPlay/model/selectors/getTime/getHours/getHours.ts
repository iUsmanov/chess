import { StateSchema } from '@/app/providers/StoreProvider';
import { ChessColor } from '@/entities/chessBoard';
import { createSelector } from '@reduxjs/toolkit';

export const getHours = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, color: ChessColor) => color,
	(state, color) => {
		const date = new Date(state.chessPlay.clocks[color].time);
		const hours = date.getHours();
		const newHours = date.getDay() === 4 ? hours - 3 : hours + 21;

		return newHours;
	}
);
