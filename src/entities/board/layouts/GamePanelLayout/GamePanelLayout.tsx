import { ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanelLayout.module.scss';

interface GamePanelLayoutProps {
	className?: string;
	bottomTimer: ReactElement;
	topTimer: ReactElement;
	board: ReactElement;
	settings?: ReactElement;
	history?: ReactElement;
}

export const GamePanelLayout = (props: GamePanelLayoutProps) => {
	const { className, board, bottomTimer, topTimer, settings, history } = props;

	return (
		<div className={classNames(cls.gamePanelLayout, {}, [className])}>
			<div className={cls.topTimer}>{topTimer}</div>
			<div className={cls.bottomTimer}>{bottomTimer}</div>
			<div className={cls.settings}>{settings}</div>
			<div className={cls.board}>{board}</div>
			<div className={cls.history}>{history}</div>
		</div>
	);
};
