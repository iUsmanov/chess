import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ChessSquare } from '../ChessSquare/ChessSquare';
import cls from './ChessBoard.module.scss';
import themesCls from '../../styles/themes/themes.module.scss';
import { isEven } from '@/shared/lib/helpers/isEven/isEven';

export type ChessBoardSize = 's' | 'm' | 'x';

interface ChessBoardProps {
	className?: string;
}

export const ChessBoard = memo((props: ChessBoardProps) => {
	const { className } = props;
	const squares = [];

	for (let x = 0; x < 8; x++) {
		for (let y = 0; y < 8; y++) {
			let isEvenSquare: boolean = false;

			if (isEven(x) && isEven(y)) {
				isEvenSquare = true;
			}
			if (!isEven(x) && !isEven(y)) {
				isEvenSquare = true;
			}

			squares.push(
				<ChessSquare
					key={`${x} + ${y}`}
					className={isEvenSquare ? themesCls.evenSquare : themesCls.oddSquare}
					figureType='knight'
					isBusy
					figureColor='black'
				/>
			);
		}
	}

	return (
		<section className={classNames(cls.chessBoard, {}, [className, themesCls[`style-${'second'}`]])}>
			{squares}
		</section>
	);
});
