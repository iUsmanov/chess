import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessSquare.module.scss';
import { ChessName, ChessColor, FiguresStyle } from '../../model/types/chessBoard';
import { getSvg } from '../../consts/chessBoard';

interface ChessSquareBaseProps {
	className?: string;
	coordinates: string;
	available?: boolean;
	isSelected?: boolean;
	onClick: (square: string) => void;
	figuresStyle: FiguresStyle;
}

interface ChessSquareFreeProps extends ChessSquareBaseProps {
	isBusy?: false;
}

interface ChessSquareBusyProps extends ChessSquareBaseProps {
	isBusy: true;
	figureName: ChessName;
	figureColor: ChessColor;
}

type ChessSquareProps = ChessSquareFreeProps | ChessSquareBusyProps;

export type ChessSquareContainerProps = Omit<
	ChessSquareBaseProps,
	'available' | 'isSelected' | 'onClick' | 'figuresStyle'
>;

export const ChessSquare = memo((props: ChessSquareProps) => {
	const { className, isBusy, coordinates, onClick, isSelected, figuresStyle } = props;

	if (!isBusy) {
		const { available } = props;
		return (
			<div
				className={classNames(cls.chessSquare, {}, [className])}
				data-square-id={coordinates}
				onClick={() => onClick(coordinates)}
			>
				{available && <div className={cls.label}></div>}
				{/* {coordinates[0]} {coordinates[1]} */}
				{/* <br /> */}
				{/* {coordinates} */}
			</div>
		);
	}

	if (isBusy) {
		const { figureColor, figureName, available } = props;
		return (
			<div
				className={classNames(
					cls.chessSquare,
					{ [cls.available]: available, [cls.selected]: isSelected },
					[className]
				)}
				data-square-id={coordinates}
				onClick={() => onClick(coordinates)}
			>
				{getSvg(figureName, figureColor, cls, figuresStyle)}
			</div>
		);
	}
});
