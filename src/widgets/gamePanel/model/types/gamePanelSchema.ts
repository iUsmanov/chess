import {
	BoardSettings,
	ChessClocks,
	ChessColor,
	ChessLocations,
	ChessMove,
	Game,
	SpecialSituation,
} from '@/entities/chessBoard';

export interface GamePanelSchema {
	locations: ChessLocations;
	mockLocations: ChessLocations;
	selectedSquare?: string;
	availableSquares: string[];
	mover: ChessColor;
	history: ChessMove[];
	clocks: ChessClocks;
	specialSituation?: SpecialSituation;
	boardSettings: BoardSettings;
	game: Game;
}
