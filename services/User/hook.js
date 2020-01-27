import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useMutation } from '@apollo/react-hooks';

import { useStatusDispatch, useStatusState } from 'Services/Status';
import { useDevice } from '../Device';
import { useUserState, useUserDispatch } from './context';
import {
	INIT,
	LOGIN,
	REGISTER,
} from './queries';

const { SESSION_KEY_USER } = process.env;
const request = {
	init: {
		query: INIT,
		statusId: 'init',
		responseId: 'Init',
	},
	register: {
		query: REGISTER,
		statusId: 'register',
		responseId: 'Register',
	},
	login: {
		query: LOGIN,
		statusId: 'login',
		responseId: 'Login',
	},
};

const startStatus = { type: 'start', payload: SESSION_KEY_USER };
const errorStatus = (error, from) => ({ type: 'error', payload: { type: SESSION_KEY_USER, error, from } });
const successStatus = { type: 'success', payload: SESSION_KEY_USER };

export const useUser = (requestId) => {
	const dispatchUser = useUserDispatch();
	const dispatchStatus = useStatusDispatch();
	const userStatus = useStatusState(SESSION_KEY_USER);
	const { data: { id }, onChange: handleDeviceChange } = useDevice();
	const { token: userToken } = useUserState();
	const {
		query,
		statusId,
		responseId,
	} = request[requestId];

	const [execMutation, { loading, error, data }] = useMutation(query);

	if (requestId === 'init' && id && userToken) return () => console.error('Device Id and token already exist');
	if (loading && userStatus !== 'loading') dispatchStatus(startStatus);
	if (error && userStatus[statusId] !== 'error') dispatchStatus(errorStatus(error, statusId));
	if ((!loading && data) && userStatus !== 'success') {
		const {
			success,
			message,
			token,
		} = data[responseId];
		if (!success && userStatus[statusId] !== 'error') dispatchStatus(errorStatus(message, statusId));
		else if (success) {
			const {
				deviceId,
				roles,
			} = jwtDecode(token);

			if (!id) handleDeviceChange({ id: deviceId });
			dispatchUser({
				type: 'userLoaded',
				payload: {
					roles,
					token,
				},
			});
			dispatchStatus(successStatus);
		}
	}
	return execMutation;
};

export const useInit = () => {
	const { data: device } = useDevice();
	const { token } = useUserState();
	const userStatus = useStatusState(SESSION_KEY_USER);
	const callInit = useUser('init');

	useEffect(() => {
		if ((!device.id || !token) && (userStatus === 'initial')) callInit({ variables: device, ssr: false });
	}, []);
};
