export interface ChessBoard {}

export type ChessName = 'king' | 'knight' | 'rook' | 'pawn' | 'queen' | 'bishop';
export type ChessColor = 'white' | 'black';
export interface Figure {
	color: ChessColor;
	name: ChessName;
	attackedSquares: string[];
}
export type ChessLocations = Record<string, Figure>;
export interface Coordinates {
	x: number;
	y: number;
}

export interface ChessMove {
	from: string;
	to: string;
	locations: ChessLocations;
}

export type BoardSize = 's' | 'm' | 'x';
export type BoardStyle = 'wood' | 'ice' | 'field';
export type ChessFiguresPack = 'classic' | 'primary';

export interface BoardSettings {
	size: BoardSize;
	style: BoardStyle;
	figuresPack: ChessFiguresPack;
}

interface Clock {
	startTime?: number;
	time: number;
	savedTime: number;
}

export type ChessClocks = Record<ChessColor, Clock>;
