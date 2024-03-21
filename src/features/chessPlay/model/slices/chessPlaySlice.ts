import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/chessPlay';
import { getIsSquareEmpty } from '../../lib/helpers/getIsSquareEmpty/getIsSquareEmpty';
import { ChessColor, getEnemy } from '@/entities/chessBoard';
import { addAttackedDiagonals } from '../../lib/helpers/addAttackedDiagonals/addAttackedDiagonals';
import { addAttackedAxles } from '../../lib/helpers/addAttackedAxles/addAttackedAxles';

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
							// let firstCoordinateY;

							// switch (figureColor) {
							// 	case 'white':
							// 		firstCoordinateY = 2;
							// 		break;
							// 	case 'black':
							// 		firstCoordinateY = 7;
							// 		break;
							// }

							const newY = figureColor === 'white' ? y + 1 : y - 1;
							if (x > 1) {
								const newX = x - 1;
								attackedSquares.push(`${newX}${newY}`);
							}

							if (x < 8) {
								const newX = x + 1;
								attackedSquares.push(`${newX}${newY}`);
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
					case 'bishop':
						(() => {
							addAttackedDiagonals(attackedSquares, state.locations, figureColor, x, y);
						})();
				}
				state.locations[square].attackedSquares.push(...attackedSquares);
			});
		},
		selectSquare: (state, action: PayloadAction<{ selectedSquare: string; mover: ChessColor }>) => {
			const selectedSquare = action.payload.selectedSquare;
			const mover = action.payload.mover;
			const enemy = getEnemy(mover);

			if (state.selectedSquare === selectedSquare) {
				state.selectedSquare = undefined;
				state.availableSquares = [];
			} else {
				state.availableSquares = [];

				if (state.locations[selectedSquare]?.color === enemy) {
					state.selectedSquare = undefined;
					return;
				}

				state.selectedSquare = selectedSquare;

				const figure = state.locations[selectedSquare];

				const currentX = selectedSquare[0];
				const currentY = selectedSquare[1];

				switch (figure.name) {
					case 'king':
						() => {};
						break;
					case 'knight':
						() => {};
						break;
					case 'rook':
						() => {};
						break;
					case 'pawn':
						(() => {
							const isFirstMoveOfPawn = true;
							const squareToTopBy1 = currentX + String(+currentY + 1);
							const squareToTopBy2 = currentX + String(+currentY + 2);
							const squareToLeftTop = String(+currentX - 1) + String(+currentY + 1);
							const squareToRightTop = String(+currentX + 1) + String(+currentY + 1);

							if (state.locations[squareToRightTop]?.color === enemy) {
								state.availableSquares.push(squareToRightTop);
							}

							if (getIsSquareEmpty(state.locations, squareToTopBy1)) {
								state.availableSquares.push(squareToTopBy1);
							}

							if (
								isFirstMoveOfPawn &&
								getIsSquareEmpty(state.locations, squareToTopBy1) &&
								getIsSquareEmpty(state.locations, squareToTopBy2)
							) {
								state.availableSquares.push(squareToTopBy2);
							}
						})();
						break;
					case 'queen':
						() => {};
						break;
					case 'bishop':
						() => {};
						break;
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
