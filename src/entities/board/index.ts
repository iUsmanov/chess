export { Board } from './components/Board/Board';
export { History } from './components/History/History';
export { BoardSquare } from './components/BoardSquare/BoardSquare';
export type { BoardSquareContainerProps } from './components/BoardSquare/BoardSquare';
export type {
	FiguresLocations,
	FigureColor,
	Coordinates,
	Figure,
	ChessMove,
	GameClocks,
	BoardSettings,
	BoardSize,
	BoardStyle,
	FiguresStyle,
	Game,
	GameResult,
	GameResultReason,
	GameResultWinner,
} from './model/types/board';
export { boardReducer } from './model/slices/boardSlice';
export { figuresPackOptions, gameOptions, sizeOptions, styleOptions } from './consts/options';
