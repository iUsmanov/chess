import { memo, useCallback } from 'react';
import { ChessSquareContainerProps } from '@/entities/chessBoard';
import { getChessAtLocation } from '../../model/selectors/getChessAtLocation/getChessAtLocation';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ChessSquare } from '@/entities/chessBoard';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSelectedSquare } from '../../model/selectors/getSelectedSquare/getSelectedSquare';
import { chessPlayActions } from '../../model/slices/chessPlaySlice';

export const ChessSquareContainer = memo((props: ChessSquareContainerProps) => {
	const { className, id, coordinates } = props;
	const selectedSquare = useSelector(getSelectedSquare);
	const dispatch = useAppDispatch();

	const figure = useSelector((state: StateSchema) => getChessAtLocation(state, id));

	const onSelectSquare = useCallback(
		(square: string) => {
			dispatch(chessPlayActions.selectSquare(square));
		},
		[dispatch]
	);

	return (
		<ChessSquare
			className={className}
			coordinates={coordinates}
			id={id}
			isBusy={Boolean(figure)}
			onSelectSquare={onSelectSquare}
			figureColor={figure?.color}
			figureType={figure?.figure}
			isSelected={id === selectedSquare}
			available={false}
		/>
	);
});
