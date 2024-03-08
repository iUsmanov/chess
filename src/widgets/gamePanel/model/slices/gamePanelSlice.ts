import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GamePanelSchema } from '../types/gamePanelSchema';

export const initialState: GamePanelSchema = {
	
};

export const gamePanelSlice = createSlice({
	name: 'gamePanel',
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

export const { actions: gamePanelActions } = gamePanelSlice;
export const { reducer: gamePanelReducer } = gamePanelSlice;