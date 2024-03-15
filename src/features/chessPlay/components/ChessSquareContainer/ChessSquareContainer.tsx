import { memo, useCallback } from 'react';
import { ChessSquareContainerProps } from '@/entities/chessBoard';
import { getChessAtLocation } from '../../model/selectors/getChessAtLocation/getChessAtLocation';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ChessSquare } from '@/entities/chessBoard';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSelectedSquare } from '../../model/selectors/getSelectedSquare/getSelectedSquare';
import { chessPlayActions } from '../../model/slices/chessPlaySlice';
import { getSquareIsAvailable } from '../../model/selectors/getSquareIsAvailable/getSquareIsAvailable';

export const ChessSquareContainer = memo((props: ChessSquareContainerProps) => {
	const { className, coordinates } = props;
	const selectedSquare = useSelector(getSelectedSquare);
	const dispatch = useAppDispatch();
	const figure = useSelector((state: StateSchema) => getChessAtLocation(state, coordinates));
	const isAvailable = useSelector((state: StateSchema) => getSquareIsAvailable(state, coordinates));

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
			isBusy={Boolean(figure)}
			onSelectSquare={onSelectSquare}
			figureColor={figure?.color}
			figureType={figure?.figure}
			isSelected={coordinates === selectedSquare}
			available={isAvailable}
		/>
	);
});
