import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/chessBoard';

export const getMover = (state: StateSchema) => state.chessBoard.mover || initialState.mover;
