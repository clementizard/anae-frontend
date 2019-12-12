import { useState, useEffect } from 'react';

export default () => {
	const [animate, setAnimate] = useState(false);
	useEffect(() => setAnimate(true), []);
	return animate;
}
