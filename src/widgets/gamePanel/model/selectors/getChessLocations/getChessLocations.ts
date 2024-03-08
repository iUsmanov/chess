import { StateSchema } from '@/app/providers/StoreProvider';

export const getChessLocations = (state: StateSchema) => state.gamePanel.locations;
