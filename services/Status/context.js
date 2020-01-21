import React, {
	createContext,
	useContext,
	useReducer,
} from 'react';

import statusReducer from './reducer';
import { getFromLocalOrDefault } from '../Tools';

const StatusStateContext = createContext();
const StatusDispatchContext = createContext();

const LOCAL_KEY_STATUS = process.env.LOCAL_KEY_STATUS;
const LOCAL_KEY_DEVICE = process.env.LOCAL_KEY_DEVICE;
const SESSION_KEY_USER = process.env.SESSION_KEY_USER;
const defaultState = {
	[LOCAL_KEY_DEVICE]: 'loading',
	[SESSION_KEY_USER]: 'loading',
};

export const StatusProvider = ({ children }) => {
	const [state, dispatch] = useReducer(statusReducer, getFromLocalOrDefault(defaultState, LOCAL_KEY_STATUS));
	
	return (
		<StatusStateContext.Provider value={state}>
			<StatusDispatchContext.Provider value={dispatch}>
				{children}
			</StatusDispatchContext.Provider>
		</StatusStateContext.Provider>
	)
};

export const useStatusState = () => {
	const context = useContext(StatusStateContext);
	if (context === undefined) throw new Error('useStatusState must be used within a StatusProvider');
	return context;
};
export const useStatusDispatch = () => {
	const context = useContext(StatusDispatchContext);
	if (context === undefined) throw new Error('useStatusDispatch must be used within a StatusProvider');
	return context;
};
