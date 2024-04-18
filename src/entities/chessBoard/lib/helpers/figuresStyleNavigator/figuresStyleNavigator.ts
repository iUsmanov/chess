import { FiguresStyle } from '../../../model/types/chessBoard';
import {
	ClassicBlackBishop,
	ClassicBlackKing,
	ClassicBlackKnight,
	ClassicBlackPawn,
	ClassicBlackQueen,
	ClassicBlackRook,
	ClassicWhiteBishop,
	ClassicWhiteKing,
	ClassicWhiteKnight,
	ClassicWhitePawn,
	ClassicWhiteQueen,
	ClassicWhiteRook,
} from '@/shared/assets/figures/classic';
import {
	StandartBlackBishop,
	StandartBlackKing,
	StandartBlackKnight,
	StandartBlackPawn,
	StandartBlackQueen,
	StandartBlackRook,
	StandartWhiteBishop,
	StandartWhiteKing,
	StandartWhiteKnight,
	StandartWhitePawn,
	StandartWhiteQueen,
	StandartWhiteRook,
} from '@/shared/assets/figures/standart';

export const figuresStyleNavigator = (figuresStyle: FiguresStyle) => {
	switch (figuresStyle) {
		case 'classic':
			return {
				BlackBishop: ClassicBlackBishop,
				BlackKing: ClassicBlackKing,
				BlackKnight: ClassicBlackKnight,
				BlackPawn: ClassicBlackPawn,
				BlackQueen: ClassicBlackQueen,
				BlackRook: ClassicBlackRook,
				WhiteBishop: ClassicWhiteBishop,
				WhiteKing: ClassicWhiteKing,
				WhiteKnight: ClassicWhiteKnight,
				WhitePawn: ClassicWhitePawn,
				WhiteQueen: ClassicWhiteQueen,
				WhiteRook: ClassicWhiteRook,
			};
		case 'standart':
			return {
				BlackBishop: StandartBlackBishop,
				BlackKing: StandartBlackKing,
				BlackKnight: StandartBlackKnight,
				BlackPawn: StandartBlackPawn,
				BlackQueen: StandartBlackQueen,
				BlackRook: StandartBlackRook,
				WhiteBishop: StandartWhiteBishop,
				WhiteKing: StandartWhiteKing,
				WhiteKnight: StandartWhiteKnight,
				WhitePawn: StandartWhitePawn,
				WhiteQueen: StandartWhiteQueen,
				WhiteRook: StandartWhiteRook,
			};
	}
};
