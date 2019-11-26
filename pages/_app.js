import React, { StrictMode } from 'react';
import App from 'next/app';

import GlobalStyles from '../styles/common/GlobalStyle';
import useWindowSize from "../tools/Hooks/windowSize";
import DeviceContext from "../services/Device";

const GlobalContexts = ({ children }) => {
	const { width, height } = useWindowSize();
	
	return (
		<DeviceContext.Provider value={{ width, height }}>
			{children}
		</DeviceContext.Provider>
	);
};

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		
		const getLayout = Component.getLayout || (page => page);
		return (
			<GlobalContexts>
				<GlobalStyles />
				{/*<StrictMode>*/}
					{getLayout(<Component {...pageProps} />)}
				{/*</StrictMode>*/}
			</GlobalContexts>
		);
	}
}

export default MyApp;
