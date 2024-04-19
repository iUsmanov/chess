import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SideMenu.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { BoardSettingsMenu } from '../BoardSettingsMenu/BoardSettingsMenu';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getGameResult } from '../../model/selectors/getGameResult/getGameResult';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import { getMover } from '../../model/selectors/getMover/getMover';

interface SideMenuProps {
	className?: string;
}

export const SideMenu = memo((props: SideMenuProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const gameResult = useSelector(getGameResult);
	const mover = useSelector(getMover);

	const goBack = useCallback(() => {
		dispatch(gamePanelActions.goBack());
	}, [dispatch]);

	const onGiveUp = useCallback(() => {
		dispatch(gamePanelActions.giveUp(mover));
	}, [dispatch, mover]);
	const onStartNewGame = useCallback(() => {
		dispatch(gamePanelActions.prepareNewGame());

		dispatch(
			gamePanelActions.setInitialTime({
				minutesString: '1',
				hoursString: '0',
			})
		);
	}, [dispatch]);

	return (
		<div
			className={classNames(cls.sideMenu, {}, [className])}
			style={{ background: 'purple', height: '100%' }}
		>
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
		</div>
	);
});
