import { StateSchema } from '@/app/providers/StoreProvider';
import { ChessColor } from '@/entities/board';
import { createSelector } from '@reduxjs/toolkit';

export const getMilliseconds = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, color: ChessColor) => color,
	(state, color) => {
		const milliseconds = new Date(state.gamePanel.clocks[color].time).getMilliseconds();

		const millisecondsString = String(milliseconds);
		if (millisecondsString.length === 3) {
			return millisecondsString;
		} else if (millisecondsString.length === 2) {
			return `0${millisecondsString}`;
		} else {
			return `00${millisecondsString}`;
		}

		// const millisecondsStringWithZero = millisecondsString.length === 1 ? `0${millisecondsString}` : millisecondsString;
		// return millisecondsStringWithZero;
	}
);
