import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ChessSquare } from '../ChessSquare/ChessSquare';
import cls from './ChessBoard.module.scss';
import themesCls from '../../styles/themes/themes.module.scss';
import { isEven } from '@/shared/lib/helpers/isEven/isEven';
import { ChessLocations } from '../../model/types/chessBoard';

export type ChessBoardSize = 's' | 'm' | 'x';

interface ChessBoardProps {
	className?: string;
	locations: ChessLocations;
	onSelectSquare: (square: string) => void;
}

const verticals = 'abcdefgh';
const horizontals = '87654321';

export const ChessBoard = memo((props: ChessBoardProps) => {
	const { className, locations, onSelectSquare } = props;
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

			const location = locations[id];

			if (location) {
				squares.push(
					<ChessSquare
						key={id}
						id={id}
						coordinates={[x + 1, Math.abs(y - 8)]}
						className={isEvenSquare ? themesCls.evenSquare : themesCls.oddSquare}
						isBusy={true}
						figureType={location.figure}
						figureColor={location.color}
						onSelectSquare={onSelectSquare}
					/>
				);
			} else {
				squares.push(
					<ChessSquare
						key={id}
						id={id}
						coordinates={[x + 1, Math.abs(y - 8)]}
						className={isEvenSquare ? themesCls.evenSquare : themesCls.oddSquare}
						onSelectSquare={onSelectSquare}
					/>
				);
			}
		}
	}

	return (
		<section className={classNames(cls.chessBoard, {}, [className, themesCls[`style-${'second'}`]])}>
			{squares}
		</section>
	);
});
