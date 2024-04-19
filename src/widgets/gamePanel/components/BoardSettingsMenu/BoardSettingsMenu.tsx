import { memo, useCallback } from 'react';
import { Listbox } from '@/shared/ui/Listbox/Listbox';
import { useSelector } from 'react-redux';
import { getBoardSettings } from '../../model/selectors/getBoardSettings/getBoardSettings';
import { BoardSize, BoardStyle, FiguresStyle, sizeOptions } from '@/entities/board';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { gamePanelActions } from '../../model/slices/gamePanelSlice';
import cls from './BoardSettingsMenu.module.scss';
import { figuresPackOptions, styleOptions } from '@/entities/board';

interface ListboxProps {
	className?: string;
}

export const BoardSettingsMenu = memo((props: ListboxProps) => {
	const { className } = props;
	const { figuresStyle, size, style } = useSelector(getBoardSettings);
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
		(newFiguresStyle: FiguresStyle) => {
			dispatch(gamePanelActions.changeBoardSettings({ figuresStyle: newFiguresStyle }));
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
				selectedValue={figuresStyle}
				label={<div className={cls.settingLabel}>Стиль фигур</div>}
			/>
		</div>
	);
});
