import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalReturn {
	isOpened: boolean;
	isMounted: boolean;
	onUnmountAndClose: () => void;
	onMountAndOpen: VoidFunction;
}

export const useModal = (): UseModalReturn => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const timerRef = useRef<undefined | ReturnType<typeof setTimeout>>(undefined);

	const onMountToggle = useCallback((bool: boolean) => {
		setIsMounted(bool);
	}, []);

	const onOpenToggle = useCallback((bool: boolean) => {
		setIsOpened(bool);
	}, []);

	const onMountAndOpen = useCallback(() => {
		if (isMounted) return;
		onMountToggle(true);
		timerRef.current = setTimeout(() => {
			onOpenToggle(true);
		}, 0);
	}, [isMounted, onMountToggle, onOpenToggle]);

	const onUnmountAndClose = useCallback(() => {
		if (!isMounted) return;
		onOpenToggle?.(false);

		timerRef.current = setTimeout(() => {
			onMountToggle?.(false);
		}, 300);
	}, [isMounted, onMountToggle, onOpenToggle]);

	useEffect(() => {
		return () => {
			clearTimeout(timerRef.current);
		};
	}, []);

	return {
		isOpened,
		isMounted,
		onUnmountAndClose,
		onMountAndOpen,
	};
};
