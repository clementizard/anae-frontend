import jwtDecode from 'jwt-decode';
import { useMutation } from '@apollo/react-hooks';

import { useDevice } from 'Services/Device';
import { useUserDispatch } from 'Services/User';
import { useStatusDispatch, useStatusState } from 'Services/Status';

import { INIT } from '../queries';

const SESSION_KEY_USER = process.env.SESSION_KEY_USER;

export default () => {
	const dispatchUser = useUserDispatch();
	const dispatchStatus = useStatusDispatch();
	const userState = useStatusState(SESSION_KEY_USER);
	const { onChange: handleDeviceChange } = useDevice();
	const [callInit, { loading, error, data }] = useMutation(INIT);

	if (loading && userState !== 'loading') dispatchStatus({ type: 'start', payload: SESSION_KEY_USER });
	
	if (error && userState !== 'error') dispatchStatus({ type: 'error', payload: { type: SESSION_KEY_USER, error } });
	if ((!loading && data) && userState !== 'success') {
		const {
			Init: {
				success,
				message,
				token,
			},
		} = data;
		if (!success) dispatchStatus({ type: 'error', payload: { type: SESSION_KEY_USER, error: message } });
		else {
			const {
				deviceId,
				roles,
			} = jwtDecode(token);
			
			handleDeviceChange({ id: deviceId });
			dispatchUser({
				type: 'userInit',
				payload: {
					roles,
					token,
				},
			});
			dispatchStatus({ type: 'success', payload: SESSION_KEY_USER });
		}
	}
	return callInit;
};
