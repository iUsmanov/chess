import { Figure } from '@/entities/chessBoard';

export interface GamePanelSchema {
	locations: Record<string, Figure>;
}
