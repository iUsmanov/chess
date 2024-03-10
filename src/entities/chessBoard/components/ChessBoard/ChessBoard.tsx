import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessBoard.module.scss';
import themesCls from '../../styles/themes/themes.module.scss';
import { isEven } from '@/shared/lib/helpers/isEven/isEven';
import { ChessSquareContainerProps } from '../ChessSquare/ChessSquare';

export type ChessBoardSize = 's' | 'm' | 'x';

interface ChessBoardProps {
	className?: string;
	ChessSquareContainer: React.MemoExoticComponent<(props: ChessSquareContainerProps) => JSX.Element>;
}

const verticals = 'abcdefgh';
const horizontals = '87654321';

export const ChessBoard = memo((props: ChessBoardProps) => {
	const { className, ChessSquareContainer } = props;
	const squares = [];

	for (let y = 0; y < 8; y++) {
		for (let x = 0; x < 8; x++) {
			const id = verticals[x] + horizontals[y];
			let isEvenSquare: boolean = false;

			if (isEven(y) && isEven(x)) {
				isEvenSquare = true;
			}
			if (!isEven(y) && !isEven(x)) {
				isEvenSquare = true;
			}

			squares.push(
				<ChessSquareContainer
					key={id}
					id={id}
					coordinates={[x + 1, Math.abs(y - 8)]}
					className={isEvenSquare ? themesCls.evenSquare : themesCls.oddSquare}
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
