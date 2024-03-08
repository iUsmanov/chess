import { ButtonHTMLAttributes, LegacyRef, ReactNode, forwardRef, memo, useMemo } from 'react';
import cls from './Button.module.scss';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

type ButtonVariant = 'primary' | 'outline';
type CircleButtonSize = 's' | 'm' | 'l' | 'x';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	children: ReactNode;
	size?: CircleButtonSize;
}

const Button = forwardRef((props: ButtonProps, ref: LegacyRef<HTMLButtonElement> | undefined) => {
	const { className, children, variant = 'primary', size = 'm', ...otherProps } = props;

	const mods: Mods = useMemo(
		() => ({
			[cls[`size-${size}`]]: size,
		}),
		[size]
	);

	return (
		<button
			{...otherProps}
			ref={ref}
			type='button'
			className={classNames(cls.button, mods, [className, cls[variant]])}
		>
			{children}
		</button>
	);
});

const MemoizedButton = memo(Button);

export { MemoizedButton as Button };
