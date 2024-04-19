export { Board } from './components/Board/Board';
export { Clock } from './components/Clock/Clock';
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
} from './model/types/board';
export { boardReducer } from './model/slices/boardSlice';
export { getEnemy } from './lib/helpers/getEnemy/getEnemy';
