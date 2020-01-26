import React, {
	createContext,
	useContext,
	useReducer,
} from 'react';

import defaultState from './default';
import userReducer from './reducer';
import { getFromSessionOrDefault } from '../Tools';

const SESSION_KEY_USER = process.env.SESSION_KEY_USER;
const UserStateContext = createContext();
const UserDispatchContext = createContext();

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		userReducer,
		getFromSessionOrDefault(defaultState, SESSION_KEY_USER),
	);

	return (
		<UserStateContext.Provider value={state}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserStateContext.Provider>
	);
};

export const useUserState = () => {
	const context = useContext(UserStateContext);
	if (context === undefined) throw new Error('useUserState must be used within a UserProvider');
	return context;
};
export const useUserDispatch = () => {
	const context = useContext(UserDispatchContext);
	if (context === undefined) throw new Error('useUserDispatch must be used within a UserProvider');
	return context;
};
