import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/chessPlay';

export const getMover = (state: StateSchema) => state.chessPlay.mover || initialState.mover;
