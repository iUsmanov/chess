import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Board.module.scss';
import themesCls from '../../styles/themes/themes.module.scss';
import { isEven } from '@/shared/lib/helpers/isEven/isEven';
import { BoardSquareContainerProps } from '../BoardSquare/BoardSquare';

interface BoardProps {
	className?: string;
	BoardSquareContainer: React.MemoExoticComponent<(props: BoardSquareContainerProps) => JSX.Element>;
}

export const Board = memo((props: BoardProps) => {
	const { className, BoardSquareContainer } = props;
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
				<BoardSquareContainer
					key={coordinates}
					coordinates={coordinates}
					className={isEvenSquare ? themesCls.evenSquare : themesCls.oddSquare}
				/>
			);
		}
	}

	return <section className={classNames(cls.board, {}, [className])}>{squares}</section>;
});
