import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Clock.module.scss';

interface ClockProps {
	className?: string;
	hours: string;
	minutes: string;
	seconds: string;
	milliseconds: string;
}

export const Clock = memo((props: ClockProps) => {
	const { className, hours, milliseconds, minutes, seconds } = props;

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
