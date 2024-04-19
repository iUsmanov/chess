import { StateSchema } from '@/app/providers/StoreProvider';
import { FigureColor } from '@/entities/board';
import { createSelector } from '@reduxjs/toolkit';

export const getAllTime = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, color: FigureColor) => color,
	(state, color) => state.gamePanel.clocks[color]
);
