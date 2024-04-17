import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/gamePanel';
import { BoardSettings, ChessColor, ChessLocations, Game, getEnemy } from '@/entities/chessBoard';
import { toggleMover } from './slice/toggleMover/toggleMover';
import { addAttackedFigures } from './slice/addAttackedFigures/addAttackedFigures';
import { takePass } from './slice/takePass/takePass';

export const gamePanelSlice = createSlice({
	name: 'gamePanel',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {},
		startGame: (state) => {
			state.isGameStarted = true;
			state.gameResult = undefined;
			addAttackedFigures(state);
		},
		// actually prepare to start new game
		prepareNewGame: (state) => {
			state.isGameStarted = false;
			state.gameResult = undefined;
			state.history.length = 1;
			state.locations = initialState.locations;
			state.mockLocations = initialState.mockLocations;
			state.mover = initialState.mover;
			state.availableSquares = [];
			state.isCheck = false;
			state.selectedSquare = undefined;
			state.clocks.black.startTime = undefined;
			state.clocks.white.startTime = undefined;

			// state.clocks
		},
		setInitialTime: (
			state,
			action: PayloadAction<{ hoursString: string; minutesString: string }>
		) => {
			const { hoursString, minutesString } = action.payload;
			const hours = Number(hoursString);
			const minutes = Number(minutesString);
			const allMinutes = 60 * hours + minutes;
			const milliseconds = allMinutes * 60 * 1000;
			state.clocks.white.savedTime = milliseconds;
			state.clocks.white.time = milliseconds;
			// ===============
			state.clocks.black.savedTime = milliseconds;
			state.clocks.black.time = milliseconds;
		},
		giveUp: (state, action: PayloadAction<ChessColor>) => {
			if (!state.isGameStarted) return;
			state.gameResult = {
				reason: 'giveUp',
				winner: getEnemy(action.payload),
			};
		},
		changeBoardSettings: (state, action: PayloadAction<Partial<BoardSettings>>) => {
			state.boardSettings = { ...state.boardSettings, ...action.payload };
		},
		changeGame: (state, action: PayloadAction<Game>) => {
			state.game = action.payload;
		},
		setTime: (state, action: PayloadAction<number>) => {
			if (!state.isGameStarted) return;
			if (state.gameResult) return;
			const newTime = action.payload;
			const startTime = state.clocks[state.mover].startTime;
			if (startTime) {
				const differenceTime = newTime - startTime;

				state.clocks[state.mover].time = state.clocks[state.mover].savedTime - differenceTime;

				if (state.clocks[state.mover].time <= 0) {
					state.gameResult = {
						reason: 'expirationTime',
						winner: getEnemy(state.mover),
					};
					state.clocks[state.mover].savedTime = 0;
					state.clocks[state.mover].time = 0;
				}
			}
		},
		goBack: (state) => {
			if (!state.isGameStarted) return;
			if (state.gameResult) return;
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
			if (state.gameResult) return;
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
