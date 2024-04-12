import { memo, useCallback } from 'react';
import { Listbox, ListboxOption } from '@/shared/ui/Listbox/Listbox';
import { useSelector } from 'react-redux';
import { getBoardSettings } from '../../model/selectors/getBoardSettings/getBoardSettings';
import { BoardSize, BoardStyle, ChessFiguresPack } from '@/entities/chessBoard';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';

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

const figuresPackOptions: ListboxOption<ChessFiguresPack>[] = [
	{
		value: 'classic',
		content: 'Классические',
		disabled: false,
	},
	{
		value: 'primary',
		content: 'Неклассические',
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
		(newFiguresPack: ChessFiguresPack) => {
			dispatch(gamePanelActions.changeBoardSettings({ figuresPack: newFiguresPack }));
		},
		[dispatch]
	);
	return (
		<div>
			<Listbox<BoardSize>
				onChange={onChangeBoardSize}
				options={sizeOptions}
				selectedValue={size}
				label={<div>Размер доски</div>}
			/>
			<br />
			<Listbox<BoardStyle>
				onChange={onChangeBoardStyle}
				options={styleOptions}
				selectedValue={style}
				label={<div>Стиль доски</div>}
			/>
			<br />
			<Listbox<ChessFiguresPack>
				onChange={onChangeBoardFiguresPack}
				options={figuresPackOptions}
				selectedValue={figuresPack}
				label={<div>Стиль фигур</div>}
			/>
		</div>
	);
});
