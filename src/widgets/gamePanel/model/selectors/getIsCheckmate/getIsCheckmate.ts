import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getIsCheckmate = (state: StateSchema) =>
	state.gamePanel.isCheckmate || initialState.isCheckmate;
