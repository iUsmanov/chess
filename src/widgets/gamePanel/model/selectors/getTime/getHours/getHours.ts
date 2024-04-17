import { StateSchema } from '@/app/providers/StoreProvider';
import { ChessColor } from '@/entities/chessBoard';
import { createSelector } from '@reduxjs/toolkit';

export const getHours = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, color: ChessColor) => color,
	(state, color) => {
		const date = new Date(state.gamePanel.clocks[color].time);
		const hours = date.getHours();
		const newHours = date.getDay() === 4 ? hours - 3 : hours + 21;
		const newHoursString = String(newHours);
		const newHoursStringWithZero =
			newHoursString.length === 1 ? `0${newHoursString}` : newHoursString;
		return newHoursStringWithZero;
	}
);
