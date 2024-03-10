import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/chessPlay';

export const getSelectedSquare = (state: StateSchema) =>
	state.chessPlay.selectedSquare || initialState.selectedSquare;
