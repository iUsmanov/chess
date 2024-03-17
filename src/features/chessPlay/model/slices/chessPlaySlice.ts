import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../consts/chessPlay';
import { getIsSquareEmpty } from '../../lib/helpers/getIsSquareEmpty/getIsSquareEmpty';
import { ChessColor, getEnemy } from '@/entities/chessBoard';

export const chessPlaySlice = createSlice({
	name: 'chessPlay',
	initialState,
	reducers: {
		template: (state, action: PayloadAction<string>) => {},
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

				switch (figure.figure) {
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

							// if (state.locations[squareToLeftTop]?.color === enemy) {
							// 	state.locations[selectedSquare] === undefined;
							// 	state.locations[squareToLeftTop].color === mover;
							// 	state.locations[squareToLeftTop].figure === figure.figure;
							// 	const kingIsAttacked = false;

							// 	state.availableSquares.push(squareToLeftTop);
							// }

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
