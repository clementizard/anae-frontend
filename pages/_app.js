import React, { Fragment, StrictMode } from 'react';
import { MediaContextProvider } from 'Styles/common/Media';
import App from 'next/app';

import GlobalStyles from 'Styles/common/GlobalStyle';
import { DeviceProvider } from 'Services/Device/context';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		const Layout = Component.Layout || Fragment;
		return (
			<DeviceProvider>
				<GlobalStyles />
				<MediaContextProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MediaContextProvider>
			</DeviceProvider>
		);
	}
}

export default MyApp;
