import { ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanelLayout.module.scss';

interface GamePanelLayoutProps {
	className?: string;
	bottomTimer: ReactElement;
	topTimer: ReactElement;
	mainContent: ReactElement;
	sideMenu?: ReactElement;
	history?: ReactElement;
}

export const GamePanelLayout = (props: GamePanelLayoutProps) => {
	const { className, mainContent, bottomTimer, topTimer, sideMenu, history } = props;

	return (
		<div className={classNames(cls.gamePanelLayout, {}, [className])}>
			<div className={cls.topTimer}>{topTimer}</div>
			<div className={cls.bottomTimer}>{bottomTimer}</div>
			<div className={cls.sideMenu}>{sideMenu}</div>
			<div className={cls.mainContent}>{mainContent}</div>
			<div className={cls.history}>{history}</div>
		</div>
	);
};

/* <GamePanelLayout
				bottomTimer={<div style={{ height: '100%', width: '100%', background: 'red' }} />}
				topTimer={<div style={{ height: '100%', background: 'green' }} />}
				board={<div style={{ height: '100%', background: 'blue' }} />}
				history={<div style={{ height: '100%', background: 'purple' }} />}
				settings={<div style={{ height: '100%', background: 'yellow' }} />}
			/> */
