import {
	BoardSettings,
	GameClocks,
	FigureColor,
	FiguresLocations,
	ChessMove,
	Game,
	GameResult,
} from '@/entities/board';

export interface GamePanelSchema {
	locations: FiguresLocations;
	mockLocations: FiguresLocations;
	selectedSquare?: string;
	availableSquares: string[];
	mover: FigureColor;
	history: ChessMove[];
	clocks: GameClocks;
	boardSettings: BoardSettings;
	game: Game;
	isCheck: boolean;
	gameResult?: GameResult;
	isGameOn: boolean;
}
