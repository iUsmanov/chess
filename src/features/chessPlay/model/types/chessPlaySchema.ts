import { ChessLocations } from '@/entities/chessBoard';
export interface ChessPlaySchema {
	locations: ChessLocations;
	selectedSquare?: string;
	availableSquares: string[];
}
