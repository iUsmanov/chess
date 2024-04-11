import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getHistory = (state: StateSchema) => state.gamePanel.history || initialState.history;
