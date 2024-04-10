import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './History.module.scss';
import { ChessMove } from '../../model/types/chessBoard';

interface HistoryProps {
	className?: string;
	history: ChessMove[];
}

const mapper = '0abcdefgh';

export const History = memo((props: HistoryProps) => {
	const { className, history } = props;

	return (
		<div className={classNames(cls.history, {}, [className])}>
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
