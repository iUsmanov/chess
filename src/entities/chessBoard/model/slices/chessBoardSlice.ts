import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChessBoardSchema } from '../types/chessBoardSchema';
import { ChessColor } from '../types/chessBoard';

export const initialState: ChessBoardSchema = {
	mover: 'white',
};

export const chessBoardSlice = createSlice({
	name: 'chessBoard',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {},
		toggleMover: (state, action: PayloadAction<ChessColor | undefined>) => {
			if (action.payload) {
				state.mover = action.payload;
			} else {
				if (state.mover === 'white') {
					state.mover = 'black';
				} else {
					state.mover = 'white';
				}
			}
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
