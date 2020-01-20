import { useState, useEffect } from 'react';

export default () => {
	const [userAgent, setUserAgent] = useState('');
	const isClient = process.browser;
	
	useEffect(() => {
		if (!isClient) return '';
		else if (!userAgent) setUserAgent(navigator.userAgent);
	}, []);
	return userAgent;
}
