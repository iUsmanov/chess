import { memo, useCallback } from 'react';
import { Listbox, ListboxOption } from '@/shared/ui/Listbox/Listbox';
import { useSelector } from 'react-redux';
import { getBoardSettings } from '../../model/selectors/getBoardSettings/getBoardSettings';
import { BoardSize, BoardStyle, FiguresStyle } from '@/entities/board';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import cls from './BoardSettingsMenu.module.scss';

interface ListboxProps {
	className?: string;
}

const sizeOptions: ListboxOption<BoardSize>[] = [
	{
		value: 's',
		content: 'Маленький',
		disabled: false,
	},
	{
		value: 'm',
		content: 'Средний',
		disabled: false,
	},
	{
		value: 'x',
		content: 'Большой',
		disabled: false,
	},
];

const styleOptions: ListboxOption<BoardStyle>[] = [
	{
		value: 'wood',
		content: 'Дерево',
		disabled: false,
	},
	{
		value: 'field',
		content: 'Поле',
		disabled: false,
	},
	{
		value: 'ice',
		content: 'Лёд',
		disabled: false,
	},
];

const figuresPackOptions: ListboxOption<FiguresStyle>[] = [
	{
		value: 'classic',
		content: 'Классический',
		disabled: false,
	},
	{
		value: 'standart',
		content: 'Стандартный',
		disabled: false,
	},
];

export const BoardSettingsMenu = memo((props: ListboxProps) => {
	const { className } = props;
	const { figuresPack, size, style } = useSelector(getBoardSettings);
	const dispatch = useAppDispatch();

	const onChangeBoardSize = useCallback(
		(newSize: BoardSize) => {
			dispatch(gamePanelActions.changeBoardSettings({ size: newSize }));
		},
		[dispatch]
	);

	const onChangeBoardStyle = useCallback(
		(newStyle: BoardStyle) => {
			dispatch(gamePanelActions.changeBoardSettings({ style: newStyle }));
		},
		[dispatch]
	);

	const onChangeBoardFiguresPack = useCallback(
		(newFiguresPack: FiguresStyle) => {
			dispatch(gamePanelActions.changeBoardSettings({ figuresPack: newFiguresPack }));
		},
		[dispatch]
	);
	return (
		<div className={cls.boardSettingsMenu}>
			<Listbox<BoardSize>
				onChange={onChangeBoardSize}
				options={sizeOptions}
				selectedValue={size}
				label={<div className={cls.settingLabel}>Размер доски</div>}
			/>
			<br />
			<Listbox<BoardStyle>
				onChange={onChangeBoardStyle}
				options={styleOptions}
				selectedValue={style}
				label={<div className={cls.settingLabel}>Стиль доски</div>}
			/>
			<br />
			<Listbox<FiguresStyle>
				onChange={onChangeBoardFiguresPack}
				options={figuresPackOptions}
				selectedValue={figuresPack}
				label={<div className={cls.settingLabel}>Стиль фигур</div>}
			/>
		</div>
	);
});
