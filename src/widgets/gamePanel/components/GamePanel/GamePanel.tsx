import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GamePanel.module.scss';
import { ChessBoardSize } from '@/entities/chessBoard';
// eslint-disable-next-line fsd-paths-guard/public-api-imports
// import { GamePanelLayout } from '@/entities/chessBoard/layouts/GamePanelLayout/GamePanelLayout';
import { ChessPlay } from '@/features/chessPlay';

interface GamePanelProps {
	className?: string;
}

export const GamePanel = memo((props: GamePanelProps) => {
	const { className } = props;
	const [size, setSize] = useState<ChessBoardSize>('s');

	return (
		<div
			className={classNames(cls.gamePanel, {}, [className])}
			data-size={size}
			data-figures-pack={`figures-${'classic'}`}
		>
			<ChessPlay />
			{/* <GamePanelLayout
				bottomTimer={<div style={{ height: '100%', width: '100%', background: 'red' }} />}
				topTimer={<div style={{ height: '100%', background: 'green' }} />}
				board={<div style={{ height: '100%', background: 'blue' }} />}
				history={<div style={{ height: '100%', background: 'purple' }} />}
				settings={<div style={{ height: '100%', background: 'yellow' }} />}
			/> */}
		</div>
	);
});
