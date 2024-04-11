import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GameHistory.module.scss';
import { ChessMove } from '@/entities/chessBoard';

interface GameHistoryProps {
	className?: string;
	history: ChessMove[];
}

const mapper = '0abcdefgh';

export const GameHistory = memo((props: GameHistoryProps) => {
	const { className, history } = props;

	return (
		<div className={classNames(cls.gameHistory, {}, [className])}>
			{history.map((move, index) => {
				const from = mapper[Number(move.from[0])] + move.from[1];
				const to = mapper[Number(move.to[0])] + move.to[1];
				return (
					<div key={index}>
						{from} - {to}
					</div>
				);
			})}
		</div>
	);
});
