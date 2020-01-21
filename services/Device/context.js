import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useMemo,
} from 'react';
import DeviceDetector from 'device-detector-js';

import useWindowSize from 'Hooks/windowSize';
import { formatDevice } from './Tools';
import { getFromLocalOrDefault } from '../Tools';

const defaultState = {};
const deviceDetector = new DeviceDetector();
const DeviceContext = createContext();
const LOCAL_KEY_DEVICE = process.env.LOCAL_KEY_DEVICE;

export const DeviceProvider = ({ children }) => {
	const isClient = process.browser;
	let defState = getFromLocalOrDefault(defaultState, LOCAL_KEY_DEVICE);

	const { width, height } = useWindowSize();
	const userAgent = isClient ? navigator.userAgent : null;
	
	if (!Object.keys(defState).length) {
		if (userAgent) defState = formatDevice(deviceDetector.parse(userAgent));

		defState.width = width;
		defState.height = height;
	}

	const [state, setState] = useState(defState);
	const handleStateChange = useCallback((changes) => {
		const newState = {
			...state,
			...changes,
		};
		setState(newState);
		if (isClient) localStorage.setItem(LOCAL_KEY_DEVICE, JSON.stringify(newState));
	}, []);

	const values = useMemo(() => ({
		onChange: handleStateChange,
		data: state,
	}), [state]);

	return (
		<DeviceContext.Provider value={values}>
			{children}
		</DeviceContext.Provider>
	)
};

export const useDevice = () => {
	const context = useContext(DeviceContext);
	if (context === undefined) throw new Error('useDevice must be used within a DeviceProvider');
	return context;
};
