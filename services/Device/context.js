import React, { createContext, useContext, useState } from 'react';
import DeviceDetector from "device-detector-js";

import useWindowSize from 'Hooks/windowSize';
import useUserAgent from 'Hooks/userAgent';

const deviceDetector = new DeviceDetector();
const DeviceContext = createContext();

const capitalize = ([firstLetter, ...rest]) => [firstLetter.toLocaleUpperCase(), ...rest].join('');

const formatDevice = (device) => {
	const out = {};

	Object.keys(device).forEach((devKey) => {
		if (device[devKey]) {
			Object.keys(device[devKey]).forEach((info) => {
				const value = device[devKey][info];
				if (value) {
					const key = devKey === 'device' ? info : `${devKey}${capitalize(info)}`;
					out[key] = value;
				}
			});
		}
	});
	return out;
};

export const DeviceProvider = ({ children }) => {
	const { width, height } = useWindowSize();
	const userAgent = useUserAgent();
	const [id, setId] = useState();

	let config = {};
	if (userAgent) config = formatDevice(deviceDetector.parse(userAgent));

	config.width = width;
	config.height = height;
	config.id = id;
	config.setId = setId;
	
	return (
		<DeviceContext.Provider value={config}>
			{children}
		</DeviceContext.Provider>
	)
};

export const useDevice = () => {
	const context = useContext(DeviceContext);
	if (context === undefined) throw new Error('useDevice must be used within a DeviceProvider');
	return context;
};
