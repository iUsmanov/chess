import { GameHistorySchema } from '../model/types/gameHistorySchema';

export const initialState: GameHistorySchema = {
	history: [{ from: '00', to: '00', locations: {} }],
};
