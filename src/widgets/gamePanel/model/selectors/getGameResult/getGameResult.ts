import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getGameResult = (state: StateSchema) =>
	state.gamePanel.gameResult || initialState.gameResult;
