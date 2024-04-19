import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BoardSquare.module.scss';
import { FigureName, FigureColor, FiguresStyle } from '../../model/types/board';
import { getSvg } from '../../lib/helpers/getSvg/getSvg';

interface BoardSquareBaseProps {
	className?: string;
	coordinates: string;
	available?: boolean;
	isSelected?: boolean;
	onClick: (square: string) => void;
	figuresStyle: FiguresStyle;
}

interface BoardSquareFreeProps extends BoardSquareBaseProps {
	isBusy?: false;
}

interface BoardSquareBusyProps extends BoardSquareBaseProps {
	isBusy: true;
	figureName: FigureName;
	figureColor: FigureColor;
}

type BoardSquareProps = BoardSquareFreeProps | BoardSquareBusyProps;

export type BoardSquareContainerProps = Omit<
	BoardSquareBaseProps,
	'available' | 'isSelected' | 'onClick' | 'figuresStyle'
>;

export const BoardSquare = memo((props: BoardSquareProps) => {
	const { className, isBusy, coordinates, onClick, isSelected, figuresStyle } = props;

	if (!isBusy) {
		const { available } = props;
		return (
			<div
				className={classNames(cls.boardSquare, {}, [className])}
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
					cls.boardSquare,
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
