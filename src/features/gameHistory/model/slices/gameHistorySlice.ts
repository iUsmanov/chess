import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/gameHistory';
import { ChessMove } from '@/entities/chessBoard';

export const gameHistorySlice = createSlice({
	name: 'gameHistory',
	initialState,
	reducers: {
		addMove: (state, action: PayloadAction<ChessMove>) => {
			state.history.push(action.payload);
			console.log('dsa');
		},
		deleteLastMove: (state) => {
			const preLastMove = state.history[state.history.length - 2];
			if (!preLastMove) return;
			state.history.pop();
		},
	},
	// extraReducers(builder) {
	// 	builder
	// 		.addCase(.pending, (state) => {
	// 			state.data = undefined;
	// 			state.error = undefined;
	// 			state.isLoading = true;
	// 		})
	// 		.addCase(.fulfilled, (state, action: PayloadAction<>) => {
	// 			state.data = action.payload;
	// 			state.isLoading = false;
	// 		})
	// 		.addCase(.rejected, (state, action) => {
	// 			state.error = action.payload;
	// 			state.isLoading = false;
	// 		});
	// },
});

export const { actions: gameHistoryActions } = gameHistorySlice;
export const { reducer: gameHistoryReducer } = gameHistorySlice;
