import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessSquare.module.scss';
import { Figure } from '../../model/types/chessBoard';

interface ChessBoardProps {
	className?: string;
	Svg?: React.FC<React.SVGProps<SVGSVGElement>>;
	figureType?: Figure;
}

const viewBoxes: Record<Figure, string> = {
	bishop: '5 5 35 35',
	king: '5 5 35 35',
	knight: '5 5 35 35',
	pawn: '5 6 35 35',
	queen: '3 2 39 39',
	rook: '5 6 35 35',
};

export const ChessSquare = memo((props: ChessBoardProps) => {
	const { className, Svg, figureType } = props;

	return (
		<div className={classNames(cls.chessSquare, {}, [className])}>
			{Svg && figureType && <Svg className={cls.svg} viewBox={viewBoxes[figureType]} />}
		</div>
	);
});
