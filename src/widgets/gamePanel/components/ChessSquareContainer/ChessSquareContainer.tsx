import { memo, useCallback } from 'react';
import { ChessSquareContainerProps } from '@/entities/chessBoard';
import { getChessAtLocation } from '../../model/selectors/getChessAtLocation/getChessAtLocation';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ChessSquare } from '@/entities/chessBoard';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSelectedSquare } from '../../model/selectors/getSelectedSquare/getSelectedSquare';
import { getSquareIsAvailable } from '../../model/selectors/getSquareIsAvailable/getSquareIsAvailable';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import { getMover } from '../../model/selectors/getMover/getMover';

export const ChessSquareContainer = memo((props: ChessSquareContainerProps) => {
	const { className, coordinates } = props;
	const selectedSquare = useSelector(getSelectedSquare);
	const dispatch = useAppDispatch();
	const figure = useSelector((state: StateSchema) => getChessAtLocation(state, coordinates));
	const isAvailable = useSelector((state: StateSchema) => getSquareIsAvailable(state, coordinates));
	const mover = useSelector(getMover);

	const onSelectSquare = useCallback(
		(square: string) => {
			dispatch(
				gamePanelActions.clickSquare({
					mover: mover,
					selectedSquare: square,
					time: new Date().getTime(),
				})
			);
		},
		[dispatch, mover]
	);

	return (
		<ChessSquare
			className={className}
			coordinates={coordinates}
			isBusy={Boolean(figure)}
			onClick={onSelectSquare}
			figureColor={figure?.color}
			figureName={figure?.name}
			isSelected={coordinates === selectedSquare}
			available={isAvailable}
		/>
	);
});
