import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessSquare.module.scss';

interface ChessBoardProps {
	className?: string;
	Svg?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const ChessSquare = memo((props: ChessBoardProps) => {
	const { className, Svg } = props;

	return <div className={classNames(cls.chessSquare, {}, [className])}>{Svg && <Svg />}</div>;
});
