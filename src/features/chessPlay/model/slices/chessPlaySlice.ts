import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/chessPlay';
import { ChessColor, getEnemy } from '@/entities/chessBoard';
import { addAttackedDiagonals } from '../../lib/helpers/addAttackedDiagonals/addAttackedDiagonals';
import { addAttackedAxles } from '../../lib/helpers/addAttackedAxles/addAttackedAxles';
import { Coordinates } from '../types/chessPlay';
import { getSquareIsExists } from '../../lib/helpers/getSquareIsExists/getSquareIsExists';

export const chessPlaySlice = createSlice({
	name: 'chessPlay',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {},
		afterMoved: (state, action: PayloadAction<{ mover: ChessColor }>) => {
			const mover = action.payload.mover;
			Object.keys(state.locations).forEach((square) => {
				const figure = state.locations[square];
				const figureColor = figure.color;
				const x = Number(square[0]);
				const y = Number(square[1]);
				state.locations[square].attackedSquares = [];
				const attackedSquares: string[] = [];
				switch (figure.name) {
					case 'pawn':
						(() => {
							let firstCoordinateY;
							let nextSquareY;
							let next2SquareY;

							switch (figureColor) {
								case 'white':
									firstCoordinateY = 2;
									nextSquareY = y + 1;
									next2SquareY = y + 2;
									break;
								case 'black':
									firstCoordinateY = 7;
									nextSquareY = y - 1;
									next2SquareY = y - 2;
									break;
							}

							const nextStringCoordinates = `${x}${nextSquareY}`;
							const next2StringCoordinates = `${x}${next2SquareY}`;

							if (!state.locations[nextStringCoordinates]) {
								attackedSquares.push(nextStringCoordinates);

								if (y === firstCoordinateY && !state.locations[next2StringCoordinates]) {
									attackedSquares.push(next2StringCoordinates);
								}
							}
							// =======================
							// =======================
							// =======================
							const newY = figureColor === 'white' ? y + 1 : y - 1;
							if (x > 1) {
								const newX = x - 1;
								const stringCoordinates = `${newX}${newY}`;

								if (
									state.locations[stringCoordinates] &&
									state.locations[stringCoordinates].color !== figureColor
								) {
									attackedSquares.push(`${newX}${newY}`);
								}
							}

							if (x < 8) {
								const newX = x + 1;
								const stringCoordinates = `${newX}${newY}`;

								if (
									state.locations[stringCoordinates] &&
									state.locations[stringCoordinates].color !== figureColor
								) {
									attackedSquares.push(`${newX}${newY}`);
								}
							}
						})();
						break;
					case 'rook':
						(() => {
							addAttackedAxles(attackedSquares, state.locations, figureColor, x, y);
						})();
						break;
					case 'queen':
						(() => {
							addAttackedAxles(attackedSquares, state.locations, figureColor, x, y);
							addAttackedDiagonals(attackedSquares, state.locations, figureColor, x, y);
						})();
						break;
					case 'knight':
						(() => {
							const coords: Coordinates[] = [
								{
									x: x + 2,
									y: y + 1,
								},
								{
									x: x + 1,
									y: y + 2,
								},
								{
									x: x + 2,
									y: y - 1,
								},
								{
									x: x + 1,
									y: y - 2,
								},
								{
									x: x - 2,
									y: y - 1,
								},
								{
									x: x - 1,
									y: y - 2,
								},
								{
									x: x - 2,
									y: y + 1,
								},
								{
									x: x - 1,
									y: y + 2,
								},
							];

							Object.values(coords).forEach((coordinates) => {
								const stringCoordinates = `${coordinates.x}${coordinates.y}`;
								if (getSquareIsExists(coordinates)) {
									if (
										!state.locations[stringCoordinates] ||
										state.locations[stringCoordinates].color !== figureColor
									) {
										attackedSquares.push(stringCoordinates);
									}
								}
							});
						})();
						break;
					case 'king':
						(() => {
							const coords: Coordinates[] = [
								{
									x: x + 1,
									y: y + 1,
								},
								{
									x: x - 1,
									y: y - 1,
								},
								{
									x: x + 1,
									y: y - 1,
								},
								{
									x: x - 1,
									y: y + 1,
								},
								{
									x,
									y: y + 1,
								},
								{
									x,
									y: y - 1,
								},
								{
									x: x + 1,
									y,
								},
								{
									x: x - 1,
									y,
								},
							];

							Object.values(coords).forEach((coordinates) => {
								const stringCoordinates = `${coordinates.x}${coordinates.y}`;
								if (getSquareIsExists(coordinates)) {
									if (
										!state.locations[stringCoordinates] ||
										state.locations[stringCoordinates].color !== figureColor
									) {
										attackedSquares.push(stringCoordinates);
									}
								}
							});
						})();
						break;
					case 'bishop':
						(() => {
							addAttackedDiagonals(attackedSquares, state.locations, figureColor, x, y);
						})();
				}
				state.locations[square].attackedSquares.push(...attackedSquares);
			});
		},
		selectSquare: (state, action: PayloadAction<{ selectedSquare: string; mover: ChessColor }>) => {
			const squareWillSelected = action.payload.selectedSquare;
			const mover = action.payload.mover;
			const enemy = getEnemy(mover);

			if (
				state.selectedSquare === squareWillSelected ||
				(state.selectedSquare &&
					// Нажатая клетка пустая ?
					!state.locations[squareWillSelected] &&
					// Если эта клетка не является атакованной выбранной фигурой
					!state.locations[state.selectedSquare].attackedSquares.includes(squareWillSelected))
			) {
				state.selectedSquare = undefined;
				state.availableSquares = [];
			} else {
				state.availableSquares = [];

				if (state.locations[squareWillSelected]?.color === enemy) {
					state.selectedSquare = undefined;
					return;
				}

				state.selectedSquare = squareWillSelected;
				if (state.locations[squareWillSelected]) {
					state.availableSquares = state.locations[squareWillSelected].attackedSquares;
				}
			}
		},
		move: (state, action: PayloadAction<any>) => {},
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
