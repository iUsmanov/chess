import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanel.module.scss';
import { ChessBoard } from '@/entities/chessBoard';
import { ChessBoardSize } from '@/entities/chessBoard';
import { useSelector } from 'react-redux';
import { getChessLocations } from '../../model/selectors/getChessLocations/getChessLocations';

interface GamePanelProps {
	className?: string;
}

export const GamePanel = memo((props: GamePanelProps) => {
	const { className } = props;
	const [size, setSize] = useState<ChessBoardSize>('s');
	const locations = useSelector(getChessLocations);

	return (
		<div
			className={classNames(cls.gamePanel, {}, [className])}
			data-size={size}
			data-figures-pack={`figures-${'classic'}`}
		>
			<ChessBoard locations={locations} />
		</div>
	);
});
