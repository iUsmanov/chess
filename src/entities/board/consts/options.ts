import { ListboxOption } from '@/shared/ui/Listbox/Listbox';
import { BoardSize, BoardStyle, FiguresStyle, Game } from '../model/types/board';

export const sizeOptions: ListboxOption<BoardSize>[] = [
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

export const styleOptions: ListboxOption<BoardStyle>[] = [
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

export const figuresPackOptions: ListboxOption<FiguresStyle>[] = [
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

export const gameOptions: ListboxOption<Game>[] = [
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
