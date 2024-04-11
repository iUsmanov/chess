import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getSelectedSquare = (state: StateSchema) =>
	state.gamePanel.selectedSquare || initialState.selectedSquare;
