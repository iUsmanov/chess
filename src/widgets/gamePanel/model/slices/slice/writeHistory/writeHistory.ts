import { FiguresLocations } from '@/entities/board';
import { GamePanelSchema } from '../../../types/gamePanelSchema';

export const writeHistory = (state: GamePanelSchema, clickedSquare: string) => {
	if (!state.selectedSquare) return;
	const locations: FiguresLocations = {};
	Object.entries(state.locations).map(([square, figure]) => {
		locations[square] = { ...figure, attackedSquares: [] };
	});
	// =============
	state.history.push({
		from: state.selectedSquare,
		to: clickedSquare,
		locations: locations,
	});
};
