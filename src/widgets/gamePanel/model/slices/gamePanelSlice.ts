import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/gamePanel';
import { ChessColor } from '@/entities/chessBoard';

export const gamePanelSlice = createSlice({
	name: 'gamePanel',
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

export const { actions: gamePanelActions } = gamePanelSlice;
export const { reducer: gamePanelReducer } = gamePanelSlice;
