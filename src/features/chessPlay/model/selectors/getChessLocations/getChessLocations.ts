import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/chessPlay';

export const getChessLocations = (state: StateSchema) =>
	state.chessPlay.locations || initialState.locations;
