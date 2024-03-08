import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ChessSquare } from '../ChessSquare/ChessSquare';
import cls from './ChessBoard.module.scss';
import themesCls from '../../styles/themes/themes.module.scss';
import { isEven } from '@/shared/lib/helpers/isEven/isEven';
import { BlackBishop } from '@/shared/assets/figures';

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
					Svg={BlackBishop}
					figureType='bishop'
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

/* 

					// Svg={<BlackBishop width={55} height={55} viewBox='5 5 35 35' />}
					// Svg={<BlackKing width={55} height={55} viewBox='5 5 35 35' />}
					// Svg={<BlackKnight width={55} height={55} viewBox='5 5 35 35' />}
					// Svg={<BlackPawn width={55} height={55} viewBox='5 6 35 35' />}
					// Svg={<BlackQueen width={55} height={55} viewBox='3 2 39 39' />}
					// Svg={<BlackRook width={55} height={55} viewBox='5 6 35 35' />}


					// Svg={<BlackBishop width={65} height={65} viewBox='5 5 35 35' />}
					// Svg={<BlackKing width={65} height={65} viewBox='5 5 35 35' />}
					// Svg={<BlackKnight width={65} height={65} viewBox='5 5 35 35' />}
					// Svg={<BlackPawn width={65} height={65} viewBox='5 6 35 35' />}
					// Svg={<BlackQueen width={65} height={65} viewBox='3 2 39 39' />}
					// Svg={<BlackRook width={65} height={65} viewBox='5 6 35 35' />}

					// Svg={<BlackBishop width={85} height={85} viewBox='5 5 35 35' />}
					// Svg={<BlackKing width={85} height={85} viewBox='5 5 35 35' />}
					// Svg={<BlackKnight width={85} height={85} viewBox='5 5 35 35' />}
					// Svg={<BlackPawn width={85} height={85} viewBox='5 6 35 35' />}
					// Svg={<BlackQueen width={85} height={85} viewBox='3 2 39 39' />}
					// Svg={<BlackRook width={85} height={85} viewBox='5 6 35 35' />}

*/
