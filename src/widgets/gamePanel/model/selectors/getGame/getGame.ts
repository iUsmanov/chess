import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getGame = (state: StateSchema) => state.gamePanel.game || initialState.game;
