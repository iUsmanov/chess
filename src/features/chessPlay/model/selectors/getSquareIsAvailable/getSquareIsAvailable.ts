import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '../../../consts/chessPlay';

export const getSquareIsAvailable = createSelector(
	(state: StateSchema) => state,
	(state: StateSchema, square: string) => square,
	(state, square) =>
		state.chessPlay.availableSquares.includes(square) ||
		initialState.availableSquares.includes(square)
);
