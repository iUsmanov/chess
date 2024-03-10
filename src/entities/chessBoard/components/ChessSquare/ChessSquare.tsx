import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessSquare.module.scss';
import { ChessFigure, ChessColor } from '../../model/types/chessBoard';
import { getSvg } from '../../consts/chessBoard';

interface ChessSquareBaseProps {
	className?: string;
	id: string;
	coordinates: [number, number];
	available?: boolean;
	isSelected?: boolean;
	onSelectSquare: (square: string) => void;
}

interface ChessSquareFreeProps extends ChessSquareBaseProps {
	isBusy?: false;
}

interface ChessSquareBusyProps extends ChessSquareBaseProps {
	isBusy: true;
	figureType: ChessFigure;
	figureColor: ChessColor;
}

type ChessBoardProps = ChessSquareFreeProps | ChessSquareBusyProps;

export const ChessSquare = memo((props: ChessBoardProps) => {
	const { className, isBusy, id, coordinates, onSelectSquare, isSelected } = props;

	if (!isBusy) {
		const { available } = props;
		return (
			<div
				className={classNames(cls.chessSquare, {}, [className])}
				data-square-id={id}
				onClick={() => onSelectSquare(id)}
			>
				{available && <div className={cls.label}></div>}
				{/* {coordinates[0]} {coordinates[1]} */}
				{/* <br /> */}
				{/* {id} */}
			</div>
		);
	}

	if (isBusy) {
		const { figureColor, figureType, available } = props;
		return (
			<div
				className={classNames(
					cls.chessSquare,
					{ [cls.available]: available, [cls.selected]: isSelected },
					[className]
				)}
				data-square-id={id}
				onClick={() => onSelectSquare(id)}
			>
				{getSvg(figureType, figureColor, cls)}
			</div>
		);
	}
});
