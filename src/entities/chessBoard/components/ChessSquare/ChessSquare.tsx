import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessSquare.module.scss';
import { ChessFigure, ChessSide } from '../../model/types/chessBoard';
import { getSvg } from '../../consts/chessBoard';

interface ChessSquareBaseProps {
	className?: string;
}

interface ChessSquareFreeProps extends ChessSquareBaseProps {
	isBusy?: false;
}

interface ChessSquareBusyProps extends ChessSquareBaseProps {
	isBusy: true;
	figureType: ChessFigure;
	figureColor: ChessSide;
}

type ChessBoardProps = ChessSquareFreeProps | ChessSquareBusyProps;

export const ChessSquare = memo((props: ChessBoardProps) => {
	const { className, isBusy } = props;

	if (!isBusy) {
		return <div className={classNames(cls.chessSquare, {}, [className])}></div>;
	}

	if (isBusy) {
		const { figureColor, figureType } = props;
		return (
			<div className={classNames(cls.chessSquare, {}, [className])}>
				{getSvg(figureType, figureColor, cls)}
			</div>
		);
	}
});
