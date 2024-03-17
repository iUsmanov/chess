import { ChessLocations } from '@/entities/chessBoard';
export interface ChessPlaySchema {
	locations: ChessLocations;
	mockLocations: ChessLocations;
	selectedSquare?: string;
	availableSquares: string[];
}
