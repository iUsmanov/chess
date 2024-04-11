import { ChessClocks, ChessColor, ChessLocations, ChessMove } from '@/entities/chessBoard';

export interface GamePanelSchema {
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
