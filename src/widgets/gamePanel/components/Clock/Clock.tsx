import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Clock.module.scss';
import { FigureColor } from '@/entities/board';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import { getMilliseconds } from '../../model/selectors/getTime/getMilliseconds/getMilliseconds';
import { getSeconds } from '../../model/selectors/getTime/getSeconds/getSeconds';
import { getMinutes } from '../../model/selectors/getTime/getMinutes/getMinutes';
import { getHours } from '../../model/selectors/getTime/getHours/getHours';

interface ClockProps {
	className?: string;
	color: FigureColor;
}

export const Clock = memo((props: ClockProps) => {
	const { className, color } = props;
	const hours = useSelector((state: StateSchema) => getHours(state, color));
	const minutes = useSelector((state: StateSchema) => getMinutes(state, color));
	const seconds = useSelector((state: StateSchema) => getSeconds(state, color));
	const milliseconds = useSelector((state: StateSchema) => getMilliseconds(state, color));

	return (
		<div className={classNames(cls.clock, {}, [className])}>
			{/* <div className={cls.period}> */}
			<div>{hours}</div>
			<div>:</div>
			{/* </div> */}
			{/* <div className={cls.period}> */}
			<div>{minutes}</div>
			<div>:</div>
			{/* </div> */}
			{/* <div className={cls.period}> */}
			<div>{seconds}</div>
			<div>:</div>
			{/* </div> */}
			{/* <div className={cls.period}> */}
			<div>{milliseconds}</div>
			{/* </div> */}
		</div>
	);
});
