import { useEffect } from 'react';
import { useUserDispatch, useUserState } from './context';
import { updateUser } from './functions';

export default () => {
	const { status, data } = useUserState();
	const dispatch = useUserDispatch();

	useEffect(() => {
		if (!data.length) updateUser(dispatch);
	}, []);

	return { status, data };
}
