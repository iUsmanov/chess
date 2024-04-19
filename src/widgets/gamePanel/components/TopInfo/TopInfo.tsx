import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TopInfo.module.scss';
import { useSelector } from 'react-redux';
import { getIsCheck } from '../../model/selectors/getIsCheck/getIsCheck';
import { getMover } from '../../model/selectors/getMover/getMover';
import { getGameResult } from '../../model/selectors/getGameResult/getGameResult';
import { getIsGameStarted } from '../../model/selectors/getIsGameOn/getIsGameOn';

interface TopInfoProps {
	className?: string;
}

export const TopInfo = memo((props: TopInfoProps) => {
	const { className } = props;
	const isCheck = useSelector(getIsCheck);
	const mover = useSelector(getMover);
	const gameResult = useSelector(getGameResult);
	const isGameOn = useSelector(getIsGameStarted);

	return (
		<div className={classNames(cls.topInfo, {}, [className])}>
			{!gameResult && !isCheck && isGameOn && <div className={cls.header}>Ходят {mover}</div>}
			{!gameResult && isCheck && <div className={cls.header}>ШАХ</div>}
			{gameResult && (
				<div className={cls.header}>
					Победитель - {gameResult.winner}. Причина - {gameResult.reason}
				</div>
			)}
		</div>
	);
});
