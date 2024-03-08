import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanel.module.scss';
import themesCls from '../../styles/themes/themes.module.scss';
import { ChessBoard } from '@/entities/chessBoard';
import { ChessBoardSize } from '@/entities/chessBoard';

interface GamePanelProps {
	className?: string;
}

export const GamePanel = memo((props: GamePanelProps) => {
	const { className } = props;
	const [size, setSize] = useState<ChessBoardSize>('s');

	return (
		<div
			className={classNames(cls.gamePanel, {}, [
				className,
				cls[`size-${size}`],
				themesCls[`figures-${'usual'}`],
			])}
			data-size={size}
		>
			<ChessBoard />
		</div>
	);
});
