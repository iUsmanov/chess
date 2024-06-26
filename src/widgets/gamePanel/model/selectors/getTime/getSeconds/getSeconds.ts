import { StateSchema } from '@/app/providers/StoreProvider';
import { FigureColor } from '@/entities/board';
import { createSelector } from '@reduxjs/toolkit';

export const getSeconds = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, color: FigureColor) => color,
	(state, color) => {
		const seconds = new Date(state.gamePanel.clocks[color].time).getSeconds();

		const secondsString = String(seconds);
		const secondsStringWithZero = secondsString.length === 1 ? `0${secondsString}` : secondsString;
		return secondsStringWithZero;
	}
);
