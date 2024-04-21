import { memo, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanel.module.scss';
import { Board, History } from '@/entities/board';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getHistory } from '../../model/selectors/getHistory/getHistory';
import { BoardSquareContainer } from '../BoardSquareContainer/BoardSquareContainer';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import { getBoardSettings } from '../../model/selectors/getBoardSettings/getBoardSettings';
import { getGameResult } from '../../model/selectors/getGameResult/getGameResult';
import { getIsGameStarted } from '../../model/selectors/getIsGameOn/getIsGameOn';
import { GamePanelLayout } from '../../layouts/GamePanelLayout/GamePanelLayout';
import { SideMenu } from '../SideMenu/SideMenu';
import { GameSettingsMenu } from '../GameSettingsMenu/GameSettingsMenu';
import { TopInfo } from '../TopInfo/TopInfo';
import { Clock } from '../Clock/Clock';

interface GamePanelProps {
	className?: string;
}

export const GamePanel = memo((props: GamePanelProps) => {
	const { className } = props;
	const { size, style } = useSelector(getBoardSettings);
	const dispatch = useAppDispatch();
	const timerRef = useRef<null | NodeJS.Timeout>(null);
	const history = useSelector(getHistory);
	const gameResult = useSelector(getGameResult);
	const isGameOn = useSelector(getIsGameStarted);

	useEffect(() => {
		dispatch(gamePanelActions.addInitialAttackedSquares());
	}, [dispatch]);

	useEffect(() => {
		timerRef.current = setInterval(() => {
			const date = new Date();
			dispatch(gamePanelActions.setTimeLeft(date.getTime()));
		}, 100);

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, [dispatch]);

	return (
		<div className={classNames(cls.gamePanel, {}, [className])} data-size={size} data-style={style}>
			<GamePanelLayout
				className={classNames(cls.chessPlay, {}, [className])}
				mainContent={
					<div className={cls.mainContent}>
						<TopInfo />
						{isGameOn || gameResult ? (
							<Board
								BoardSquareContainer={BoardSquareContainer}
								className={classNames('', { [cls.gameIsEnd]: Boolean(gameResult) }, [])}
							/>
						) : (
							<GameSettingsMenu />
						)}
					</div>
				}
				topTimer={<Clock color='black' />}
				bottomTimer={<Clock color='white' />}
				history={isGameOn ? <History history={history} /> : undefined}
				sideMenu={<SideMenu />}
			/>
		</div>
	);
});
{
	/* <GamePanelLayout
				bottomTimer={<div style={{ height: '100%', width: '100%', background: 'red' }} />}
				topTimer={<div style={{ height: '100%', background: 'green' }} />}
				board={<div style={{ height: '100%', background: 'blue' }} />}
				history={<div style={{ height: '100%', background: 'purple' }} />}
				settings={<div style={{ height: '100%', background: 'yellow' }} />}
			/> */
}
