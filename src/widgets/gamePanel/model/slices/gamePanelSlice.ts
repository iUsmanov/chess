import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/gamePanel';
import { BoardSettings, FigureColor, Game } from '@/entities/board';
import { toggleMover } from './slice/toggleMover/toggleMover';
import { addAttackedFigures } from './slice/addAttackedFigures/addAttackedFigures/addAttackedFigures';
import { getEnemy } from '../../lib/getEnemy/getEnemy';
import { finishGame } from './slice/finishGame/finishGame';
import { moveFigure } from './slice/moveFigure/moveFigure';
import { writeHistory } from './slice/writeHistory/writeHistory';

export const gamePanelSlice = createSlice({
	name: 'gamePanel',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {},
		startGame: (state) => {
			if (state.clocks.white.time < 60000) return;
			state.mover = initialState.mover;
			state.isGameOn = true;
			addAttackedFigures(state);
		},
		prepareNewGame: (state) => {
			state.gameResult = undefined;
			state.history.length = 1;
			state.locations = initialState.locations;
			state.mockLocations = initialState.mockLocations;
		},
		giveUp: (state, action: PayloadAction<FigureColor>) => {
			if (!state.isGameOn) return;
			finishGame(state, 'giveUp', getEnemy(action.payload));
		},
		changeBoardSettings: (state, action: PayloadAction<Partial<BoardSettings>>) => {
			state.boardSettings = { ...state.boardSettings, ...action.payload };
		},
		changeGame: (state, action: PayloadAction<Game>) => {
			state.game = action.payload;
		},
		addInitialAttackedSquares: (state) => {
			addAttackedFigures(state);
		},
		setPartyTime: (state, action: PayloadAction<{ hoursString: string; minutesString: string }>) => {
			const { hoursString, minutesString } = action.payload;
			const hours = Number(hoursString);
			const minutes = Number(minutesString);

			if (Number.isNaN(hours) || Number.isNaN(minutes)) return;

			const allMinutes = 60 * hours + minutes;
			const milliseconds = allMinutes * 60 * 1000;

			if (milliseconds > 86400000) return;

			state.clocks.white.savedTime = milliseconds;
			state.clocks.white.time = milliseconds;
			state.clocks.black.savedTime = milliseconds;
			state.clocks.black.time = milliseconds;
		},
		setTimeLeft: (state, action: PayloadAction<number>) => {
			if (!state.isGameOn) return;
			const newTime = action.payload;
			const startTiming = state.clocks[state.mover].startTiming;

			if (startTiming) {
				const differenceTime = newTime - startTiming;
				state.clocks[state.mover].time = state.clocks[state.mover].savedTime - differenceTime;

				if (state.clocks[state.mover].time <= 0) {
					state.clocks[state.mover].savedTime = 0;
					state.clocks[state.mover].time = 0;

					finishGame(state, 'expirationTime', getEnemy(state.mover));
				}
			}
		},
		goBack: (state) => {
			if (!state.isGameOn) return;
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
		clickSquare: (
			state,
			action: PayloadAction<{ selectedSquare: string; mover: FigureColor; time: number }>
		) => {
			if (state.gameResult) return;
			const clickedSquare = action.payload.selectedSquare;
			const mover = action.payload.mover;
			const time = action.payload.time;
			const enemy = getEnemy(mover);

			// !Когда мы отменаяем выбранную фигуру
			if (
				// Выбранная фигура и нажатая - одно и то же ?
				state.selectedSquare === clickedSquare ||
				// Есть выбранная фигура ?
				(state.selectedSquare &&
					// Нажатая клетка пустая ?
					!state.locations[clickedSquare] &&
					// Если эта клетка не является атакованною выбранной фигурой ?
					!state.locations[state.selectedSquare].attackedSquares.includes(clickedSquare))
			) {
				// Отменяем выделение фигуры
				state.selectedSquare = undefined;
				// Отменяем выделение атакованных клеток
				state.availableSquares = [];
			}
			// !Когда мы выбираем или перевыбираем фигуру
			else if (
				// Нажатая клетка имеет в себе фигуру И она принадлежит муверу ?
				state.locations[clickedSquare]?.color === mover
			) {
				state.selectedSquare = clickedSquare;
				state.availableSquares = state.locations[clickedSquare].attackedSquares;
			}
			// !Ход фигурой
			else if (
				// Есть выделенная клетка с фигурой ?
				state.selectedSquare &&
				// Нажатая клетка имеет в себе фигуру и она принадлежит врагу ?
				(state.locations[clickedSquare]?.color === enemy ||
					// Нажатая клетка пустая ?
					!state.locations[clickedSquare]) &&
				// Выбранная фигура атакует нажатую клетку ?
				state.locations[state.selectedSquare].attackedSquares.includes(clickedSquare)
			) {
				moveFigure(state, clickedSquare);
				writeHistory(state, clickedSquare);
				// ===============
				state.selectedSquare = undefined;
				state.availableSquares = [];
				// ===============
				toggleMover(state);
				addAttackedFigures(state);
				// ===============
				if (state.isGameOn) {
					state.clocks[state.mover].startTiming = time;
					state.clocks[state.mover].savedTime = state.clocks[state.mover].time;
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
