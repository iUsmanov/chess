import { memo, useCallback, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanel.module.scss';
import { ChessBoard, Clock, GameHistory } from '@/entities/chessBoard';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getHours } from '../../model/selectors/getTime/getHours/getHours';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getMinutes } from '../../model/selectors/getTime/getMinutes/getMinutes';
import { getSeconds } from '../../model/selectors/getTime/getSeconds/getSeconds';
import { getMilliseconds } from '../../model/selectors/getTime/getMilliseconds/getMilliseconds';
import { GamePanelLayout } from '@/entities/chessBoard';
import { getHistory } from '../../model/selectors/getHistory/getHistory';
import { getIsCheck } from '../../model/selectors/getIsCheck/getIsCheck';
import { getIsCheckmate } from '../../model/selectors/getIsCheckmate/getIsCheckmate';
import { ChessSquareContainer } from '../ChessSquareContainer/ChessSquareContainer';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import { getMover } from '../../model/selectors/getMover/getMover';
import { getBoardSettings } from '../../model/selectors/getBoardSettings/getBoardSettings';

interface GamePanelProps {
	className?: string;
}

export const GamePanel = memo((props: GamePanelProps) => {
	const { className } = props;
	const { figuresPack, size, style } = useSelector(getBoardSettings);
	const dispatch = useAppDispatch();
	const timerRef = useRef<null | NodeJS.Timeout>(null);
	const history = useSelector(getHistory);
	const isCheck = useSelector(getIsCheck);
	const isCheckmate = useSelector(getIsCheckmate);
	const mover = useSelector(getMover);
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
		dispatch(gamePanelActions.addInitialAttackedSquares());
	}, [dispatch]);

	const goBack = useCallback(() => {
		dispatch(gamePanelActions.goBack());
	}, [dispatch]);

	useEffect(() => {
		timerRef.current = setInterval(() => {
			const date = new Date();
			dispatch(gamePanelActions.setTime(date.getTime()));
		}, 100);

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, [dispatch]);

	return (
		<div
			className={classNames(cls.gamePanel, {}, [className])}
			data-size={size}
			data-figures-pack={`figures-${figuresPack}`}
			data-style={style}
		>
			<GamePanelLayout
				className={classNames(cls.chessPlay, {}, [className])}
				board={
					<div className={cls.main}>
						{!isCheck && !isCheckmate && <div className={cls.header}>Ходят {mover}</div>}
						{isCheck && !isCheckmate && <div className={cls.header}>CHEX</div>}
						{isCheckmate && <div className={cls.header}>CHECKMATE</div>}
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
				history={<GameHistory history={history} />}
				settings={
					<div style={{ background: 'purple', height: '100%' }}>
						<button type='button' onClick={goBack}>
							Сделать ход назад
						</button>
					</div>
				}
			/>
			{/* <GamePanelLayout
				bottomTimer={<div style={{ height: '100%', width: '100%', background: 'red' }} />}
				topTimer={<div style={{ height: '100%', background: 'green' }} />}
				board={<div style={{ height: '100%', background: 'blue' }} />}
				history={<div style={{ height: '100%', background: 'purple' }} />}
				settings={<div style={{ height: '100%', background: 'yellow' }} />}
			/> */}
		</div>
	);
});
