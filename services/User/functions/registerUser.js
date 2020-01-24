import jwtDecode from 'jwt-decode';
import { useMutation } from '@apollo/react-hooks';

import { useUserDispatch } from 'Services/User';
import { useStatusDispatch, useStatusState } from 'Services/Status';

import { REGISTER } from '../queries';

const SESSION_KEY_USER = process.env.SESSION_KEY_USER;

export default () => {
	const dispatchUser = useUserDispatch();
	const dispatchStatus = useStatusDispatch();
	const userStatus = useStatusState(SESSION_KEY_USER);
	const [callRegister, { loading, error, data }] = useMutation(REGISTER);
	
	if (loading && userStatus !== 'loading') dispatchStatus({ type: 'start', payload: SESSION_KEY_USER });
	
	if (error && userStatus !== 'error') dispatchStatus({ type: 'error', payload: { type: SESSION_KEY_USER, error } });
	if ((!loading && data) && userStatus !== 'success') {
		const {
			Register: {
				success,
				message,
				token,
			},
		} = data;
		if (!success) dispatchStatus({ type: 'error', payload: { type: SESSION_KEY_USER, error: message } });
		else {
			const { roles } = jwtDecode(token);
			
			dispatchUser({
				type: 'userRegister',
				payload: {
					roles,
					token,
				},
			});
			dispatchStatus({ type: 'success', payload: SESSION_KEY_USER });
		}
	}
	return callRegister;
};
