export const getDevice = () => {
	const viewportWidth = document.documentElement.clientWidth;
	const viewportHeight = document.documentElement.clientHeight;
	const isMobile = window.matchMedia('(pointer:coarse)');

	return {
		viewportWidth,
		viewportHeight,
		isMobile,
	};
};
