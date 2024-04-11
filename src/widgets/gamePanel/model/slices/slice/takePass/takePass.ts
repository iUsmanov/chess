import { ChessLocations } from '@/entities/chessBoard';
import { GamePanelSchema } from '../../../types/gamePanelSchema';
export const takePass = (
	state: GamePanelSchema,
	locations: ChessLocations,
	squareFrom: string,
	squareTo: string
) => {
	const figureWillMove = locations[squareFrom];
	const lastMove = state.history[state.history.length - 1];

	if (lastMove && figureWillMove.name === 'pawn' && squareTo[0] !== squareFrom[0]) {
		const x = Number(squareFrom[0]);
		const y = Number(squareFrom[1]);
		const takePassY = figureWillMove.color === 'white' ? 5 : 4;

		const lastMoveToX = Number(lastMove.to[0]);
		const lastMoveToY = Number(lastMove.to[1]);

		if (y === takePassY && lastMoveToY === y && Math.abs(x - lastMoveToX) === 1) {
			const lastMovedFigure = locations[lastMove.to];
			if (lastMovedFigure.name === 'pawn') {
				delete locations[lastMove.to];
			}
		}
	}
};
