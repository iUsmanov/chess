import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanel.module.scss';
import { ChessBoard } from '@/entities/chessBoard';
import { ChessBoardSize } from '@/entities/chessBoard';
import { useSelector } from 'react-redux';
import { getChessLocations } from '../../model/selectors/getChessLocations/getChessLocations';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import { getSelectedSquare } from '../../model/selectors/getSelectedSquare/getSelectedSquare';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface GamePanelProps {
	className?: string;
}

export const GamePanel = memo((props: GamePanelProps) => {
	const { className } = props;
	const [size, setSize] = useState<ChessBoardSize>('s');
	const locations = useSelector(getChessLocations);
	const selectedSquare = useSelector(getSelectedSquare);
	const dispatch = useAppDispatch();

	const onSelectSquare = useCallback(
		(square: string) => {
			dispatch(gamePanelActions.selectSquare(square));
		},
		[dispatch]
	);

	return (
		<div
			className={classNames(cls.gamePanel, {}, [className])}
			data-size={size}
			data-figures-pack={`figures-${'classic'}`}
		>
			<ChessBoard
				locations={locations}
				onSelectSquare={onSelectSquare}
				selectedSquare={selectedSquare}
			/>
		</div>
	);
});
