import { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessPlay.module.scss';
import { ChessBoard } from '@/entities/chessBoard';
import { ChessSquareContainer } from '../ChessSquareContainer/ChessSquareContainer';
import { chessPlayActions } from '../../model/slices/chessPlaySlice/chessPlaySlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ChessPlayProps {
	className?: string;
}

export const ChessPlay = memo((props: ChessPlayProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(chessPlayActions.afterMoved({ mover: 'white' }));
	}, [dispatch]);

	return (
		<div className={classNames(cls.chessPlay, {}, [className])}>
			<ChessBoard ChessSquareContainer={ChessSquareContainer} />
		</div>
	);
});
