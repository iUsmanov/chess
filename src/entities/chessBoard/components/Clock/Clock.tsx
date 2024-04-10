import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Clock.module.scss';

interface ClockProps {
	className?: string;
	hours: number;
	minutes: number;
	seconds: number;
	milliseconds: number;
}

export const Clock = memo((props: ClockProps) => {
	const { className, hours, milliseconds, minutes, seconds } = props;

	return (
		<div className={classNames(cls.clock, {}, [className])}>
			<div className={cls.period}>
				<div>Часы - </div>
				<div>{hours}</div>
			</div>
			<div className={cls.period}>
				<div>Минуты - </div>
				<div>{minutes}</div>
			</div>
			<div className={cls.period}>
				<div>Секунды - </div>
				<div>{seconds}</div>
			</div>
			<div className={cls.period}>
				<div>Миллисекунды - </div>
				<div>{milliseconds}</div>
			</div>
		</div>
	);
});
