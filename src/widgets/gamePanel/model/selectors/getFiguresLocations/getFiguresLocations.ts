import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getFiguresLocations = (state: StateSchema) =>
	state.gamePanel.locations || initialState.locations;
