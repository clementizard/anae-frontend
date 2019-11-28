import React, { createContext, useContext } from 'react';

import useWindowSize from 'Tools/Hooks/windowSize';

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
	const size = useWindowSize();

	return (
		<DeviceContext.Provider value={size}>
			{children}
		</DeviceContext.Provider>
	)
};

export const useDevice = () => {
	const context = useContext(DeviceContext);
	if (context === undefined) throw new Error('useDevice must be used within a DeviceProvider');
	return context;
};
