import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './GameHistory.module.scss';
import { ChessMove } from '../../model/types/chessBoard';
import { HStack } from '@/shared/ui/Stack';

interface GameHistoryProps {
	className?: string;
	history: ChessMove[];
}

const mapper = '0abcdefgh';

export const GameHistory = memo((props: GameHistoryProps) => {
	const { className, history } = props;

	const newArray: Array<[ChessMove, ChessMove?]> = [];

	history.forEach((move, index) => {
		if (index === 0) return;
		if (history.length < 2) return;
		const lastElementIndex = newArray.length - 1;
		// if (!newArray[lastElementIndex]) return;

		if (!newArray[lastElementIndex] || newArray[lastElementIndex][1]) {
			newArray.push([move]);
		} else {
			newArray[lastElementIndex].push(move);
		}
	});

	const moves = newArray.map((pair, index) => {
		const pairNumber = index + 1;
		const { from: whiteFrom, to: whiteTo } = getFromAndTo(pair[0], mapper);
		let blackFrom, blackTo;
		if (pair[1]) {
			const { from, to } = getFromAndTo(pair[1], mapper);
			blackFrom = from;
			blackTo = to;
		}

		return (
			<HStack wrap='wrap' justify='between' className={cls.move} key={index}>
				<div className={cls.pairNumber}>{pairNumber}</div>
				<div className={cls.whiteMove}>
					{whiteFrom} - {whiteTo}
				</div>
				<div className={cls.blackMove}>{pair[1] && `${blackFrom} - ${blackTo}`}</div>
			</HStack>
		);
	});

	return (
		<div className={classNames(cls.gameHistory, {}, [className])}>
			<HStack wrap='wrap' justify='between' className={cls.move}>
				<div className={cls.pairNumber}>Ход</div>
				<div className={cls.whiteMove}>Белые</div>
				<div className={cls.blackMove}>Чёрные</div>
			</HStack>
			{moves}
		</div>
	);
});

// return (
// <div key={index}>
// 	{from} - {to}
// </div>
// );

function getFromAndTo(move: ChessMove, mapper: string) {
	const from = mapper[Number(move.from[0])] + move.from[1];
	const to = mapper[Number(move.to[0])] + move.to[1];

	return {
		from,
		to,
	};
}
