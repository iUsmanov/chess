import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GameSettingsMenu.module.scss';
import { Game } from '@/entities/board';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getGame } from '../../model/selectors/getGame/getGame';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getHours } from '../../model/selectors/getTime/getHours/getHours';
import { getMinutes } from '../../model/selectors/getTime/getMinutes/getMinutes';
import { Listbox, ListboxOption } from '@/shared/ui/Listbox/Listbox';

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

interface GameSettingsMenuProps {
	className?: string;
}

export const GameSettingsMenu = memo((props: GameSettingsMenuProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const game = useSelector(getGame);
	const whiteHours = useSelector((state: StateSchema) => getHours(state, 'white'));
	const whiteMinutes = useSelector((state: StateSchema) => getMinutes(state, 'white'));

	const onStartGame = useCallback(() => {
		dispatch(gamePanelActions.startGame());
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

	return (
		<div className={classNames(cls.gameSettingsMenu, {}, [className])}>
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
		</div>
	);
});
