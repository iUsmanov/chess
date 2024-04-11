import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getChessLocations = (state: StateSchema) =>
	state.gamePanel.locations || initialState.locations;
