import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessPlay.module.scss';
import { ChessBoard } from '@/entities/chessBoard';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getChessLocations } from '../../model/selectors/getChessLocations/getChessLocations';
import { getSelectedSquare } from '../../model/selectors/getSelectedSquare/getSelectedSquare';
import { chessPlayActions } from '../../model/slices/chessPlaySlice';

interface ChessPlayProps {
	className?: string;
}

export const ChessPlay = memo((props: ChessPlayProps) => {
	const { className } = props;
	const locations = useSelector(getChessLocations);
	const selectedSquare = useSelector(getSelectedSquare);
	const dispatch = useAppDispatch();

	const onSelectSquare = useCallback(
		(square: string) => {
			dispatch(chessPlayActions.selectSquare(square));
		},
		[dispatch]
	);

	return (
		<div className={classNames(cls.chessPlay, {}, [className])}>
			<ChessBoard
				locations={locations}
				onSelectSquare={onSelectSquare}
				selectedSquare={selectedSquare}
			/>
		</div>
	);
});
