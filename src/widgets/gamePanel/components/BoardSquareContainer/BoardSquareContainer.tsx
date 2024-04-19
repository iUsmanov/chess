import { memo, useCallback } from 'react';
import { BoardSquareContainerProps } from '@/entities/board';
import { getFigureAtLocation } from '../../model/selectors/getFigureAtLocation/getFigureAtLocation';
import { StateSchema } from '@/app/providers/StoreProvider';
import { BoardSquare } from '@/entities/board';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSelectedSquare } from '../../model/selectors/getSelectedSquare/getSelectedSquare';
import { getSquareIsAvailable } from '../../model/selectors/getSquareIsAvailable/getSquareIsAvailable';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import { getMover } from '../../model/selectors/getMover/getMover';
import { getBoardSettings } from '../../model/selectors/getBoardSettings/getBoardSettings';

export const BoardSquareContainer = memo((props: BoardSquareContainerProps) => {
	const { className, coordinates } = props;
	const selectedSquare = useSelector(getSelectedSquare);
	const { figuresStyle } = useSelector(getBoardSettings);
	const dispatch = useAppDispatch();
	const figure = useSelector((state: StateSchema) => getFigureAtLocation(state, coordinates));
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
		<BoardSquare
			figuresStyle={figuresStyle}
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
