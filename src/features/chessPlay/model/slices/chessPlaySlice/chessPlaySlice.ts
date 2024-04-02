import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../consts/chessPlay';
import { ChessColor, getEnemy } from '@/entities/chessBoard';
import { addAttackedFigures } from './slice/addAttackedFigures/addAttackedFigures';
import { toggleMover } from './slice/toggleMover/toggleMover';
import { takePass } from './slice/takePass/takePass';

export const chessPlaySlice = createSlice({
	name: 'chessPlay',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {},
		afterMoved: (state, action: PayloadAction<{ mover: ChessColor }>) => {
			addAttackedFigures(state);
		},
		clickSquare: (state, action: PayloadAction<{ selectedSquare: string; mover: ChessColor }>) => {
			const clickedSquare = action.payload.selectedSquare;
			const mover = action.payload.mover;
			const enemy = getEnemy(mover);

			// Когда мы отменаяем выбранную фигуру
			if (
				// Выбранная фигура и нажатая - одно и то же
				state.selectedSquare === clickedSquare ||
				// Есть выбранная фигура
				(state.selectedSquare &&
					// Нажатая клетка пустая ?
					!state.locations[clickedSquare] &&
					// Если эта клетка не является атакованною выбранной фигурой
					!state.locations[state.selectedSquare].attackedSquares.includes(clickedSquare))
			) {
				state.selectedSquare = undefined;
				state.availableSquares = [];
			}
			// Когда мы выбираем или перевыбираем фигуру
			else if (state.locations[clickedSquare]?.color === mover) {
				state.selectedSquare = clickedSquare;
				state.availableSquares = state.locations[clickedSquare].attackedSquares;
			}
			// Ход фигурой
			else if (
				state.selectedSquare &&
				(state.locations[clickedSquare]?.color === enemy || !state.locations[clickedSquare]) &&
				state.locations[state.selectedSquare].attackedSquares.includes(clickedSquare)
			) {
				takePass(state, state.locations, state.selectedSquare, clickedSquare);
				takePass(state, state.mockLocations, state.selectedSquare, clickedSquare);
				// =============
				state.locations[clickedSquare] = state.locations[state.selectedSquare];
				delete state.locations[state.selectedSquare];
				// =============
				state.mockLocations[clickedSquare] = state.mockLocations[state.selectedSquare];
				delete state.mockLocations[state.selectedSquare];
				// =============
				state.history.push({
					from: state.selectedSquare,
					to: clickedSquare,
					locations: state.locations,
				});
				// ===============
				state.selectedSquare = undefined;
				state.availableSquares = [];
				// ===============
				toggleMover(state);
				addAttackedFigures(state);
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

export const { actions: chessPlayActions } = chessPlaySlice;
export const { reducer: chessPlayReducer } = chessPlaySlice;
