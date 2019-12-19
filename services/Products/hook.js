import { useEffect } from 'react';
import { useNamedDispatch, useNamedState } from './context';
import { updateNamed } from './functions';

export default () => {
	const { status, data } = useNamedState();
	const dispatch = useNamedDispatch();
	
	useEffect(() => {
		if (!data.length) updateNamed(dispatch);
	}, []);
	
	return { status, data };
}
