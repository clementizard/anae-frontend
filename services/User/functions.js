import jwtDecode from 'jwt-decode';
import { useMutation } from '@apollo/react-hooks';

import { useDevice } from 'Services/Device';
import { useUserDispatch } from 'Services/User';
import { useStatusDispatch } from 'Services/Status';

import {
	INIT,
	REGISTER,
	LOGIN,
} from './queries';

const SESSION_KEY_USER = process.env.SESSION_KEY_USER;

export const initUser = () => {
	const dispatchUser = useUserDispatch();
	const dispatchStatus = useStatusDispatch();
	const { data: { id: deviceId }, onChange: handleDeviceChange } = useDevice();
	const [callInit, { loading, error, data }] = useMutation(INIT);

	if (deviceId) return () => console.error('device id already exist');

	if (loading) dispatchStatus({ type: 'start', payload: SESSION_KEY_USER });

	if (error) dispatchStatus({ type: 'error', payload: { type: SESSION_KEY_USER, error } });
	if (!loading && data) {
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
				userId,
				deviceId,
				roles,
			} = jwtDecode(token);

			handleDeviceChange({ id: deviceId });
			dispatchUser({
				type: 'userInit',
				payload: {
					userId,
					roles,
					token,
				},
			});
			dispatchStatus({ type: 'success', payload: SESSION_KEY_USER });
		}
	}
	return callInit;
};
