import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getIsGameStarted = (state: StateSchema) =>
	state.gamePanel.isGameStarted || initialState.isGameStarted;
