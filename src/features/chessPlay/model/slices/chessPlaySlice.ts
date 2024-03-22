import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/chessPlay';
import { ChessColor, getEnemy } from '@/entities/chessBoard';
import { addAttackedFigures } from '../../lib/helpers/slice/addAttackedFigures/addAttackedFigures';

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
				state.locations[clickedSquare] = state.locations[state.selectedSquare];
				delete state.locations[state.selectedSquare];
				state.selectedSquare = undefined;
				state.availableSquares = [];

				addAttackedFigures(state);

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

export const { actions: chessPlayActions } = chessPlaySlice;
export const { reducer: chessPlayReducer } = chessPlaySlice;
