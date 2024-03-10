import { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedSquare = (state: StateSchema) => state.gamePanel.selectedSquare;
