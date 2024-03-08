import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

type FlexJustify = 'left' | 'center' | 'right' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column' | 'rowReverse' | 'columnReverse';
type FlexGap = '4' | '8' | '16' | '24' | '32';
type FlexWrap = 'wrap' | 'nowrap' | 'wrapReverse';

export const justifyClasses: Record<FlexJustify, string> = {
	left: cls.justifyLeft,
	center: cls.justifyCenter,
	right: cls.justifyRight,
	between: cls.justifyBetween,
};

export const alignClasses: Record<FlexAlign, string> = {
	start: cls.alignStart,
	center: cls.alignCenter,
	end: cls.alignEnd,
};

export const directionClasses: Record<FlexDirection, string> = {
	row: cls.directionRow,
	column: cls.directionColumn,
	rowReverse: cls.directionRowReverse,
	columnReverse: cls.directionColumnReverse,
};

export const wrapClasses: Record<FlexWrap, string> = {
	wrap: cls.wrap,
	nowrap: cls.nowrap,
	wrapReverse: cls.wrapReverse,
};

export const gapClasses: Record<FlexGap, string> = {
	4: cls.gap4,
	8: cls.gap8,
	16: cls.gap16,
	24: cls.gap24,
	32: cls.gap32,
};

type FlexTags = 'div' | 'section' | 'main' | 'aside' | 'footer' | 'header' | 'nav' | 'article';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
	className?: string;
	justify?: FlexJustify;
	align?: FlexAlign;
	direction?: FlexDirection;
	gap?: FlexGap;
	wrap?: FlexWrap;
	max?: boolean;
	Tag?: FlexTags;
	children: ReactNode;
}

export const Flex = (props: FlexProps) => {
	const {
		className,
		align = 'start',
		justify = 'left',
		direction = 'row',
		wrap = 'nowrap',
		gap,
		children,
		max,
		Tag = 'div',
		...otherProps
	} = props;

	const classes = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		wrapClasses[wrap],
		gap && gapClasses[gap],
	];

	const mods: Mods = {
		[cls.max]: max,
	};

	return (
		<Tag {...otherProps} className={classNames(cls.flex, mods, classes)}>
			{children}
		</Tag>
	);
};
