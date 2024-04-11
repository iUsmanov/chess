import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessBoard.module.scss';
import themesCls from '../../styles/themes/themes.module.scss';
import { isEven } from '@/shared/lib/helpers/isEven/isEven';
import { ChessSquareContainerProps } from '../ChessSquare/ChessSquare';

interface ChessBoardProps {
	className?: string;
	ChessSquareContainer: React.MemoExoticComponent<(props: ChessSquareContainerProps) => JSX.Element>;
}

export const ChessBoard = memo((props: ChessBoardProps) => {
	const { className, ChessSquareContainer } = props;
	const squares = [];

	for (let y = 0; y < 8; y++) {
		for (let x = 0; x < 8; x++) {
			const coordinates = `${x + 1}${8 - y}`;
			let isEvenSquare: boolean = false;

			if (isEven(y) && isEven(x)) {
				isEvenSquare = true;
			}
			if (!isEven(y) && !isEven(x)) {
				isEvenSquare = true;
			}

			squares.push(
				<ChessSquareContainer
					key={coordinates}
					coordinates={coordinates}
					className={isEvenSquare ? themesCls.evenSquare : themesCls.oddSquare}
				/>
			);
		}
	}

	return <section className={classNames(cls.chessBoard, {}, [className])}>{squares}</section>;
});
