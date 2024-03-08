import { useState } from 'react';

type UseDeviceReturn = [boolean, number, number];

export function useDevice(): UseDeviceReturn {
	const [viewportWidth] = useState<number>(document.documentElement.clientWidth);
	const [viewportHeight] = useState<number>(document.documentElement.clientHeight);

	const isMobile = window.matchMedia('(pointer:coarse)');

	return [isMobile.matches, viewportWidth, viewportHeight];
}
