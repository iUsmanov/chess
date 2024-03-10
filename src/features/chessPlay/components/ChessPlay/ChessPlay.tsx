import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessPlay.module.scss';
import { ChessBoard, ChessColor } from '@/entities/chessBoard';
import { ChessSquareContainer } from '../ChessSquareContainer/ChessSquareContainer';

interface ChessPlayProps {
	className?: string;
	mover: ChessColor;
}

export const ChessPlay = memo((props: ChessPlayProps) => {
	const { className, mover } = props;

	return (
		<div className={classNames(cls.chessPlay, {}, [className])}>
			<ChessBoard ChessSquareContainer={ChessSquareContainer} />
		</div>
	);
});
