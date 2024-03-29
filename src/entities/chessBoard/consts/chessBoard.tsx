import { ChessName, ChessColor } from '../model/types/chessBoard';
import {
	BlackBishop,
	BlackKing,
	BlackKnight,
	BlackPawn,
	BlackQueen,
	BlackRook,
	WhiteBishop,
	WhiteKing,
	WhiteKnight,
	WhitePawn,
	WhiteQueen,
	WhiteRook,
} from '@/shared/assets/figures';
import { ChessBoardSchema } from '../model/types/chessBoardSchema';

const viewBoxes: Record<ChessName, string> = {
	bishop: '5 5 35 35',
	king: '5 5 35 35',
	knight: '5 5 35 35',
	pawn: '5 6 35 35',
	queen: '3 2 39 39',
	rook: '5 6 35 35',
};

export const getSvg = (figureType: ChessName, figureColor: ChessColor, cls: Record<string, string>) => {
	switch (figureColor) {
		case 'white': {
			switch (figureType) {
				case 'king':
					return <WhiteKing className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'knight':
					return <WhiteKnight className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'rook':
					return <WhiteRook className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'pawn':
					return <WhitePawn className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'queen':
					return <WhiteQueen className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'bishop':
					return <WhiteBishop className={cls.svg} viewBox={viewBoxes[figureType]} />;
			}
			break;
		}
		case 'black': {
			switch (figureType) {
				case 'king':
					return <BlackKing className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'knight':
					return <BlackKnight className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'rook':
					return <BlackRook className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'pawn':
					return <BlackPawn className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'queen':
					return <BlackQueen className={cls.svg} viewBox={viewBoxes[figureType]} />;
				case 'bishop':
					return <BlackBishop className={cls.svg} viewBox={viewBoxes[figureType]} />;
			}
		}
	}
};

export const initialState: ChessBoardSchema = {
	mover: 'white',
};
