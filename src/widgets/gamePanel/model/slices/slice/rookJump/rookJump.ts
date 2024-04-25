import { FiguresLocations } from '@/entities/board';
import { GamePanelSchema } from '../../../types/gamePanelSchema';
export const rookJump = (
	state: GamePanelSchema,
	locations: FiguresLocations,
	squareFrom: string,
	squareTo: string
) => {
	const figureWillMove = locations[squareFrom];
	if (figureWillMove.name !== 'king') return;

	const different = Number(squareFrom[0]) - Number(squareTo[0]);
	const homeY = figureWillMove.color === 'white' ? '1' : '8';

	if (different === 2) {
		locations[`4${homeY}`] = locations[`1${homeY}`];
		delete locations[`1${homeY}`];
	} else if (different === -2) {
		locations[`6${homeY}`] = locations[`8${homeY}`];
		delete locations[`8${homeY}`];
	}
};
