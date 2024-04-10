import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/chessPlay';

export const getIsCheck = (state: StateSchema) => state.chessPlay.isCheck || initialState.isCheck;
