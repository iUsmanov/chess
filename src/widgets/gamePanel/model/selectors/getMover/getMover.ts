import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../../consts/gamePanel';

export const getMover = (state: StateSchema) => state.gamePanel.mover || initialState.mover;
