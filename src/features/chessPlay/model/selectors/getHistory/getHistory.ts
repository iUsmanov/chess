import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/chessPlay';

export const getHistory = (state: StateSchema) => state.chessPlay.history || initialState.history;
