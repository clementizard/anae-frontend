import React, {Fragment, StrictMode, useState, useEffect, useMemo} from 'react';
import { MediaContextProvider } from 'Styles/common/Media';
import App from 'next/app';

import GlobalStyles from 'Styles/common/GlobalStyle';
import { DeviceProvider, useDevice } from 'Services/Device/context';

const GlobalLayout = ({ children }) => {
	const { width, height } = useDevice();
	
	const Container = useMemo(() => ({ children, ...props }) => (
		<div
			style={{
				'--fullHeight': `${height}px`,
				'--fullWidth': `${width}px`,
			}}
			{...props}
		>
			{children}
		</div>
	), [width, height]);

	return (
		<Container>
			{children}
		</Container>
	);
};

const GlobalContexts = ({ children }) => {
	return (
		<>
			<GlobalLayout>
				{children}
			</GlobalLayout>
		</>
	);
};

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		// const getLayout = Component.getLayout || (page => page);
		const Layout = Component.Layout || Fragment;
		return (
			<DeviceProvider>
				<GlobalStyles />
				<MediaContextProvider>
				{/*<StrictMode>*/}
					<Layout>
						<Component {...pageProps} />
					</Layout>
					{/*{getLayout(<Component {...pageProps} />)}*/}
				{/*</StrictMode>*/}
				</MediaContextProvider>
			</DeviceProvider>
		);
	}
}

export default MyApp;
