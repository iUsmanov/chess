import { ChessBoard } from '@/entities/chessBoard';
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
			<ChessBoard />
			{/* <div style={{ width: 400, height: 400 }}>
				<BlackBishop width={60} height={60} viewBox='5 5 35 35' />
				<BlackKing width={60} height={60} viewBox='5 5 35 35' />
				<BlackKnight width={60} height={60} viewBox='5 5 35 35' />
				<BlackPawn width={60} height={60} viewBox='5 5 35 35' />
				<BlackQueen width={60} height={60} viewBox='3 2 39 39' />
				<BlackRook width={60} height={60} viewBox='5 5 35 35' />
			</div> */}
		</div>
	);
});
