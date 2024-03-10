import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanel.module.scss';
import { ChessBoardSize } from '@/entities/chessBoard';
import { ChessPlay } from '@/features/chessPlay';
import { useSelector } from 'react-redux';
import { getMover } from '../../model/selectors/getMover/getMover';

interface GamePanelProps {
	className?: string;
}

export const GamePanel = memo((props: GamePanelProps) => {
	const { className } = props;
	const [size, setSize] = useState<ChessBoardSize>('s');
	const mover = useSelector(getMover);

	return (
		<div
			className={classNames(cls.gamePanel, {}, [className])}
			data-size={size}
			data-figures-pack={`figures-${'classic'}`}
		>
			<ChessPlay mover={mover} />
		</div>
	);
});
