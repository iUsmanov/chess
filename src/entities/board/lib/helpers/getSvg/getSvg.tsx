import { ChessName, ChessColor, FiguresStyle } from '../../../model/types/board';
import { figuresStyleNavigator } from '../figuresStyleNavigator/figuresStyleNavigator';

// const viewBoxes: Record<ChessName, string> = {
// 	bishop: '5 5 35 35',
// 	king: '5 5 35 35',
// 	knight: '5 5 35 35',
// 	pawn: '5 6 35 35',
// 	queen: '3 2 39 39',
// 	rook: '5 6 35 35',
// };

export const getSvg = (
	figureType: ChessName,
	figureColor: ChessColor,
	cls: Record<string, string>,
	figuresStyle: FiguresStyle
) => {
	const {
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
	} = figuresStyleNavigator(figuresStyle);

	switch (figureColor) {
		case 'white': {
			switch (figureType) {
				case 'king':
					return <WhiteKing className={cls.svg} />;
				case 'knight':
					return <WhiteKnight className={cls.svg} />;
				case 'rook':
					return <WhiteRook className={cls.svg} />;
				case 'pawn':
					return <WhitePawn className={cls.svg} />;
				case 'queen':
					return <WhiteQueen className={cls.svg} />;
				case 'bishop':
					return <WhiteBishop className={cls.svg} />;
			}
			break;
		}
		case 'black': {
			switch (figureType) {
				case 'king':
					return <BlackKing className={cls.svg} />;
				case 'knight':
					return <BlackKnight className={cls.svg} />;
				case 'rook':
					return <BlackRook className={cls.svg} />;
				case 'pawn':
					return <BlackPawn className={cls.svg} />;
				case 'queen':
					return <BlackQueen className={cls.svg} />;
				case 'bishop':
					return <BlackBishop className={cls.svg} />;
			}
		}
	}
};
