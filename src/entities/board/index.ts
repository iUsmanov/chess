export { Board } from './components/Board/Board';
export { Clock } from './components/Clock/Clock';
export { GamePanelLayout } from './layouts/GamePanelLayout/GamePanelLayout';
export { History } from './components/History/History';
export { BoardSquare } from './components/BoardSquare/BoardSquare';
export type { BoardSquareContainerProps } from './components/BoardSquare/BoardSquare';
export type {
	ChessLocations,
	ChessColor,
	Coordinates,
	Figure,
	ChessMove,
	ChessClocks,
	BoardSettings,
	BoardSize,
	BoardStyle,
	FiguresStyle,
	Game,
	GameResult,
} from './model/types/board';
export { boardReducer } from './model/slices/boardSlice';
export { getEnemy } from './lib/helpers/getEnemy/getEnemy';
