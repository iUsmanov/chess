import { GamePanel } from '@/widgets/gamePanel';
import { memo } from 'react';
// import {
// 	BlackBishop,
// 	BlackKnight,
// 	BlackKing,
// 	BlackPawn,
// 	BlackQueen,
// 	BlackRook,
// } from '@/shared/assets/figures';
export const GamePage = memo(() => {
	return (
		<div>
			<GamePanel />
		</div>
	);
});
