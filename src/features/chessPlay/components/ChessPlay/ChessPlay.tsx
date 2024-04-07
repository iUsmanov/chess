import { memo, useCallback, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessPlay.module.scss';
import { ChessBoard } from '@/entities/chessBoard';
import { ChessSquareContainer } from '../ChessSquareContainer/ChessSquareContainer';
import { chessPlayActions } from '../../model/slices/chessPlaySlice/chessPlaySlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getHours } from '../../model/selectors/getTime/getHours/getHours';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getMinutes } from '../../model/selectors/getTime/getMinutes/getMinutes';
import { getSeconds } from '../../model/selectors/getTime/getSeconds/getSeconds';
import { getMilliseconds } from '../../model/selectors/getTime/getMilliseconds/getMilliseconds';

interface ChessPlayProps {
	className?: string;
}

export const ChessPlay = memo((props: ChessPlayProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const timerRef = useRef<null | NodeJS.Timeout>(null);
	const hours = useSelector((state: StateSchema) => getHours(state, 'white'));
	const minutes = useSelector((state: StateSchema) => getMinutes(state, 'white'));
	const seconds = useSelector((state: StateSchema) => getSeconds(state, 'white'));
	const milliseconds = useSelector((state: StateSchema) => getMilliseconds(state, 'white'));

	useEffect(() => {
		dispatch(chessPlayActions.addInitialAttackedSquares());
	}, [dispatch]);

	const goBack = useCallback(() => {
		dispatch(chessPlayActions.goBack());
	}, [dispatch]);

	useEffect(() => {
		timerRef.current = setInterval(() => {
			const date = new Date();
			dispatch(chessPlayActions.setTime(date.getTime()));
		}, 100);

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, [dispatch]);

	return (
		<div className={classNames(cls.chessPlay, {}, [className])}>
			<div style={{ width: 400, height: 100, background: 'red' }}>
				<div>{hours}</div>
				<div>{minutes}</div>
				<div>{seconds}</div>
				<div>{milliseconds}</div>
			</div>
			<button type='button' onClick={goBack}>
				Back
			</button>
			<ChessBoard ChessSquareContainer={ChessSquareContainer} />
		</div>
	);
});

// TODO Fix bug with take pass
