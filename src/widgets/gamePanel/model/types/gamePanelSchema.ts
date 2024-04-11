import {
	BoardSettings,
	ChessClocks,
	ChessColor,
	ChessLocations,
	ChessMove,
	Game,
} from '@/entities/chessBoard';

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
	boardSettings: BoardSettings;
	game: Game;
}
