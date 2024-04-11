import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/gamePanel';
import { BoardSettings, ChessColor, ChessLocations, getEnemy } from '@/entities/chessBoard';
import { toggleMover } from './slice/toggleMover/toggleMover';
import { addAttackedFigures } from './slice/addAttackedFigures/addAttackedFigures';
import { takePass } from './slice/takePass/takePass';

export const gamePanelSlice = createSlice({
	name: 'gamePanel',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {},
		changeBoardSettings: (state, action: PayloadAction<Partial<BoardSettings>>) => {
			state.boardSettings = { ...state.boardSettings, ...action.payload };
		},
		setTime: (state, action: PayloadAction<number>) => {
			const newTime = action.payload;
			const startTime = state.clocks[state.mover].startTime;
			if (startTime) {
				const differenceTime = newTime - startTime;

				state.clocks[state.mover].time = state.clocks[state.mover].savedTime - differenceTime;
			}
		},
		goBack: (state) => {
			const preLastMove = state.history[state.history.length - 2];
			if (!preLastMove) return;
			state.history.pop();
			// ===============
			state.locations = preLastMove.locations;
			state.mockLocations = preLastMove.locations;
			// ===============
			state.selectedSquare = undefined;
			state.availableSquares = [];
			// ===============
			toggleMover(state);
			addAttackedFigures(state);
		},
		addInitialAttackedSquares: (state) => {
			addAttackedFigures(state);
		},
		clickSquare: (
			state,
			action: PayloadAction<{ selectedSquare: string; mover: ChessColor; time: number }>
		) => {
			const clickedSquare = action.payload.selectedSquare;
			const mover = action.payload.mover;
			const time = action.payload.time;
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
				const locations: ChessLocations = {};
				Object.entries(state.locations).map(([square, figure]) => {
					locations[square] = { ...figure, attackedSquares: [] };
				});
				// =============
				state.history.push({
					from: state.selectedSquare,
					to: clickedSquare,
					locations: locations,
				});
				// ===============
				state.selectedSquare = undefined;
				state.availableSquares = [];
				// ===============
				toggleMover(state);
				addAttackedFigures(state);
				// ===============
				state.clocks[state.mover].startTime = time;
				state.clocks[state.mover].savedTime = state.clocks[state.mover].time;
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
