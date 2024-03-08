import { ChessFigure } from '../model/types/chessBoard';

export const viewBoxes: Record<ChessFigure, string> = {
	bishop: '5 5 35 35',
	king: '5 5 35 35',
	knight: '5 5 35 35',
	pawn: '5 6 35 35',
	queen: '3 2 39 39',
	rook: '5 6 35 35',
};
