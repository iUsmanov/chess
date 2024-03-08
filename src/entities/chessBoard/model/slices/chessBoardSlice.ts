import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChessBoardSchema } from '../types/chessBoardSchema';

export const initialState: ChessBoardSchema = {
	
};

export const chessBoardSlice = createSlice({
	name: 'chessBoard',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {
        
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

export const { actions: chessBoardActions } = chessBoardSlice;
export const { reducer: chessBoardReducer } = chessBoardSlice;