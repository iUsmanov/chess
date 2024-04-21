export type FigureName = 'king' | 'knight' | 'rook' | 'pawn' | 'queen' | 'bishop';
export type FigureColor = 'white' | 'black';
export type FiguresLocations = Record<string, Figure>;
export type FiguresStyle = 'classic' | 'standart';
export type BoardSize = 's' | 'm' | 'x';
export type BoardStyle = 'wood' | 'ice' | 'field';
export type Game = 'chess' | 'checkers';
export type GameClocks = Record<FigureColor, Clock>;
export type GameResultWinner = FigureColor | 'draw';
export type GameResultReason = 'giveUp' | 'expirationTime' | 'checkmate' | 'stalemate';

export interface Figure {
	color: FigureColor;
	name: FigureName;
	attackedSquares: string[];
}

export interface Coordinates {
	x: number;
	y: number;
}

export interface ChessMove {
	from: string;
	to: string;
	locations: FiguresLocations;
}

export interface BoardSettings {
	size: BoardSize;
	style: BoardStyle;
	figuresStyle: FiguresStyle;
}

export interface GameResult {
	winner: GameResultWinner;
	reason: GameResultReason;
}

interface Clock {
	startTiming?: number;
	time: number;
	savedTime: number;
}
