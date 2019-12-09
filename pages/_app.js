import React, { Fragment, StrictMode } from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import { MediaContextProvider } from 'Styles/common/Media';
import GlobalStyles from 'Styles/common/GlobalStyle';
import { DeviceProvider } from 'Services/Device/context';
import withApollo from 'Services/withApollo';

class MyApp extends App {
	render() {
		const { Component, pageProps, apollo } = this.props;

		const Layout = Component.Layout || Fragment;
		return (
			<DeviceProvider>
				<GlobalStyles />
				<MediaContextProvider>
					<ApolloProvider client={apollo}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ApolloProvider>
				</MediaContextProvider>
			</DeviceProvider>
		);
	}
}

export default withApollo(MyApp);
