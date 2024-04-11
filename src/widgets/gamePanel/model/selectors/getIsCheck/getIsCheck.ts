import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getIsCheck = (state: StateSchema) => state.gamePanel.isCheck || initialState.isCheck;
