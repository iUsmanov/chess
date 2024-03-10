import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessPlay.module.scss';
import { ChessBoard } from '@/entities/chessBoard';
import { ChessSquareContainer } from '../ChessSquareContainer/ChessSquareContainer';

interface ChessPlayProps {
	className?: string;
}

export const ChessPlay = memo((props: ChessPlayProps) => {
	const { className } = props;

	return (
		<div className={classNames(cls.chessPlay, {}, [className])}>
			<ChessBoard ChessSquareContainer={ChessSquareContainer} />
		</div>
	);
});
