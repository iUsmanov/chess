import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/chessPlay';

export const getIsCheckmate = (state: StateSchema) =>
	state.chessPlay.isCheckmate || initialState.isCheckmate;
