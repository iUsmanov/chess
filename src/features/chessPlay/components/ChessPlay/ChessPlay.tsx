import { memo, useCallback, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChessPlay.module.scss';
import { ChessBoard, Clock, History } from '@/entities/chessBoard';
import { ChessSquareContainer } from '../ChessSquareContainer/ChessSquareContainer';
import { chessPlayActions } from '../../model/slices/chessPlaySlice/chessPlaySlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getHours } from '../../model/selectors/getTime/getHours/getHours';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getMinutes } from '../../model/selectors/getTime/getMinutes/getMinutes';
import { getSeconds } from '../../model/selectors/getTime/getSeconds/getSeconds';
import { getMilliseconds } from '../../model/selectors/getTime/getMilliseconds/getMilliseconds';
import { GamePanelLayout } from '@/entities/chessBoard';
import { getHistory } from '../../model/selectors/getHistory/getHistory';

interface ChessPlayProps {
	className?: string;
}

export const ChessPlay = memo((props: ChessPlayProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const timerRef = useRef<null | NodeJS.Timeout>(null);
	const history = useSelector(getHistory);
	// ===========
	const whiteHours = useSelector((state: StateSchema) => getHours(state, 'white'));
	const whiteMinutes = useSelector((state: StateSchema) => getMinutes(state, 'white'));
	const whiteSeconds = useSelector((state: StateSchema) => getSeconds(state, 'white'));
	const whiteMilliseconds = useSelector((state: StateSchema) => getMilliseconds(state, 'white'));
	// ===========
	const blackHours = useSelector((state: StateSchema) => getHours(state, 'black'));
	const blackMinutes = useSelector((state: StateSchema) => getMinutes(state, 'black'));
	const blackSeconds = useSelector((state: StateSchema) => getSeconds(state, 'black'));
	const blackMilliseconds = useSelector((state: StateSchema) => getMilliseconds(state, 'black'));

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
		<GamePanelLayout
			className={classNames(cls.chessPlay, {}, [className])}
			board={
				<div>
					<ChessBoard ChessSquareContainer={ChessSquareContainer} />
				</div>
			}
			topTimer={
				<Clock
					hours={blackHours}
					milliseconds={blackMilliseconds}
					minutes={blackMinutes}
					seconds={blackSeconds}
				/>
			}
			bottomTimer={
				<Clock
					hours={whiteHours}
					milliseconds={whiteMilliseconds}
					minutes={whiteMinutes}
					seconds={whiteSeconds}
				/>
			}
			history={<History history={history} />}
			settings={
				<div style={{ background: 'purple', height: '100%' }}>
					<button type='button' onClick={goBack}>
						Сделать ход назад
					</button>
				</div>
			}
		/>
	);
});
