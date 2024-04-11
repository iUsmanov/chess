import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getBoardSettings = (state: StateSchema) =>
	state.gamePanel.boardSettings || initialState.boardSettings;
