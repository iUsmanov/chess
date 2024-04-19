import { memo, useCallback, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanel.module.scss';
import { Board, Clock, Game, History } from '@/entities/board';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getHours } from '../../model/selectors/getTime/getHours/getHours';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getMinutes } from '../../model/selectors/getTime/getMinutes/getMinutes';
import { getSeconds } from '../../model/selectors/getTime/getSeconds/getSeconds';
import { getMilliseconds } from '../../model/selectors/getTime/getMilliseconds/getMilliseconds';
import { GamePanelLayout } from '@/entities/board';
import { getHistory } from '../../model/selectors/getHistory/getHistory';
import { BoardSquareContainer } from '../BoardSquareContainer/BoardSquareContainer';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import { getMover } from '../../model/selectors/getMover/getMover';
import { getBoardSettings } from '../../model/selectors/getBoardSettings/getBoardSettings';
import { BoardSettingsMenu } from '../BoardSettingsMenu/BoardSettingsMenu';
import { Button } from '@/shared/ui/Button/Button';
import { getIsCheck } from '../../model/selectors/getIsCheck/getIsCheck';
import { getGameResult } from '../../model/selectors/getGameResult/getGameResult';
import { Input } from '@/shared/ui/Input/Input';
import { getIsGameStarted } from '../../model/selectors/getIsGameStarted/getIsGameStarted';
import { Listbox, ListboxOption } from '@/shared/ui/Listbox/Listbox';
import { getGame } from '../../model/selectors/getGame/getGame';

const gameOptions: ListboxOption<Game>[] = [
	{
		value: 'chess',
		content: 'Шахматы',
		disabled: false,
	},
	{
		value: 'checkers',
		content: 'Шашки',
		disabled: false,
	},
];

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
	const mover = useSelector(getMover);
	const gameResult = useSelector(getGameResult);
	const isGameStarted = useSelector(getIsGameStarted);
	const game = useSelector(getGame);
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

	const onGiveUp = useCallback(() => {
		dispatch(gamePanelActions.giveUp(mover));
	}, [dispatch, mover]);

	const onStartGame = useCallback(() => {
		dispatch(gamePanelActions.startGame());
	}, [dispatch]);

	const onStartNewGame = useCallback(() => {
		dispatch(gamePanelActions.prepareNewGame());

		dispatch(
			gamePanelActions.setInitialTime({
				minutesString: '1',
				hoursString: '0',
			})
		);
	}, [dispatch]);

	const setInitialHours = useCallback(
		(newHours: string) => {
			dispatch(
				gamePanelActions.setInitialTime({
					minutesString: String(whiteMinutes),
					hoursString: newHours,
				})
			);
		},
		[dispatch, whiteMinutes]
	);

	const setInitialMinutes = useCallback(
		(newMinutes: string) => {
			dispatch(
				gamePanelActions.setInitialTime({
					minutesString: newMinutes,
					hoursString: String(whiteHours),
				})
			);
		},
		[dispatch, whiteHours]
	);

	const onChangeGame = useCallback(
		(newGame: Game) => {
			dispatch(gamePanelActions.changeGame(newGame));
		},
		[dispatch]
	);

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
						{!gameResult && !isCheck && isGameStarted && (
							<div className={cls.header}>Ходят {mover}</div>
						)}
						{!gameResult && isCheck && <div className={cls.header}>ШАХ</div>}
						{gameResult && (
							<div className={cls.header}>
								Победитель - {gameResult.winner}. Причина - {gameResult.reason}
							</div>
						)}

						{isGameStarted ? (
							<Board
								BoardSquareContainer={BoardSquareContainer}
								className={classNames('', { [cls.gameIsEnd]: Boolean(gameResult) }, [])}
							/>
						) : (
							<>
								<Listbox<Game>
									onChange={onChangeGame}
									options={gameOptions}
									selectedValue={game}
									label={<div>Игра</div>}
								/>
								<br />
								<br />
								<Input value={whiteHours} onChange={setInitialHours} label='Часы' />
								<br />
								<Input value={whiteMinutes} onChange={setInitialMinutes} label='Минуты' />
								<Button onClick={onStartGame}>Начать игру</Button>
							</>
						)}
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
				history={isGameStarted ? <History history={history} /> : undefined}
				settings={
					<div style={{ background: 'purple', height: '100%' }}>
						<br />
						<br />
						<Button onClick={goBack}>Сделать ход назад</Button>
						<br />
						<br />
						<Button onClick={onGiveUp}>Сдаться</Button>
						<br />
						<br />
						{gameResult && <Button onClick={onStartNewGame}>Начать новую игру</Button>}
						<br />
						<br />
						<hr />
						<br />
						<BoardSettingsMenu />
						{/* <Button>Button</Button> */}
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
