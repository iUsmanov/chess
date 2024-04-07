import { ChessColor, ChessLocations, ChessMove } from '@/entities/chessBoard';
import { ChessClocks } from '@/entities/chessBoard';
export interface ChessPlaySchema {
	locations: ChessLocations;
	mockLocations: ChessLocations;
	selectedSquare?: string;
	availableSquares: string[];
	mover: ChessColor;
	history: ChessMove[];
	clocks: ChessClocks;
	isCheck?: boolean;
	isCheckmate?: boolean;
}
