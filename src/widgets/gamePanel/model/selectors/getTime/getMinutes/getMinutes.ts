import { StateSchema } from '@/app/providers/StoreProvider';
import { FigureColor } from '@/entities/board';
import { createSelector } from '@reduxjs/toolkit';

export const getMinutes = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, color: FigureColor) => color,
	(state, color) => {
		const minutes = new Date(state.gamePanel.clocks[color].time).getMinutes();

		const minutesString = String(minutes);
		const minutesStringWithZero = minutesString.length === 1 ? `0${minutesString}` : minutesString;
		return minutesStringWithZero;
	}
);
