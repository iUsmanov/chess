export interface ChessBoard {}

export type ChessFigure = 'king' | 'knight' | 'rook' | 'pawn' | 'queen' | 'bishop';
export type ChessColor = 'white' | 'black';
export interface Figure {
	color: ChessColor;
	figure: ChessFigure;
}
export type ChessLocations = Record<string, Figure>;
