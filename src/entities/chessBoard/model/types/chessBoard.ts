export interface ChessBoard {}

export type ChessName = 'king' | 'knight' | 'rook' | 'pawn' | 'queen' | 'bishop';
export type ChessColor = 'white' | 'black';
export interface Figure {
	color: ChessColor;
	name: ChessName;
	attackedSquares: string[];
}
export type ChessLocations = Record<string, Figure>;
