import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getSpecialSituation = (state: StateSchema) =>
	state.gamePanel.specialSituation || initialState.specialSituation;
