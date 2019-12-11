import { useState, useEffect, useCallback } from 'react';

const useWindowSize = () => {
	const isClient = process.browser;
	const getSize = useCallback(() => {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		};
	}, []);
	const [windowSize, setWindowSize] = useState(getSize());
	
	useEffect(() => {
		if (!isClient) return false;

		function handleResize() {
			setWindowSize(getSize());
		}
		
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount and unmount
	
	return windowSize;
};

export default useWindowSize;
