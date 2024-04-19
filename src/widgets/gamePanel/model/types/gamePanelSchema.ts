import {
	BoardSettings,
	ChessClocks,
	ChessColor,
	ChessLocations,
	ChessMove,
	Game,
	GameResult,
} from '@/entities/board';

export interface GamePanelSchema {
	locations: ChessLocations;
	mockLocations: ChessLocations;
	selectedSquare?: string;
	availableSquares: string[];
	mover: ChessColor;
	history: ChessMove[];
	clocks: ChessClocks;
	boardSettings: BoardSettings;
	game: Game;
	isCheck: boolean;
	gameResult?: GameResult;
	isGameStarted: boolean;
}
