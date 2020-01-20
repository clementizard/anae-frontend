import jwtDecode from 'jwt-decode';
import { useMutation } from '@apollo/react-hooks';

import {
	INIT,
	REGISTER,
	LOGIN,
} from './queries';

export const initUser = (dispatchUser, device) => {
	const {
		setId,
		...variables
	} = device;
	const [callInit, { loading, error, data }] = useMutation(INIT);
	
	if (loading) dispatchUser({ type: 'initStart' });
	
	if (error) {
		console.log('ERROR: ', error);
		dispatchUser({ type: 'initFail', payload: error });
	}
	if (!loading && data) {
		console.log('SUCCESS: ', data);
		const {
			success,
			message,
			token,
		} = data.Init;
		if (!success) dispatchUser({ type: 'initFail', payload: message });
		else {
			const {
				userId,
				deviceId,
				roles,
			} = jwtDecode(token);

			console.log('DECODED: ', userId, deviceId, roles);
			setId(deviceId);
			dispatchUser({
				type: 'initSuccess',
				payload: {
					userId,
					roles,
					token,
				},
			});
		}
	}
	return callInit;
};
