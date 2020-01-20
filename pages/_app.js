import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import { MediaContextProvider } from 'Styles/common/Media';
import GlobalStyles from 'Styles/common/GlobalStyle';
import { DeviceProvider } from 'Services/Device/context';
import { UserProvider } from 'Services/User';
import withApollo from 'Services/withApollo';

if (process.env.NODE_ENV !== 'production') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
	whyDidYouRender(React);
}

const ContextProviders = ({ children, apollo }) => (
	<MediaContextProvider>
		<ApolloProvider client={apollo}>
			<DeviceProvider>
				<UserProvider>
						{children}
				</UserProvider>
			</DeviceProvider>
		</ApolloProvider>
	</MediaContextProvider>
);

class MyApp extends App {
	render() {
		const { Component, pageProps, apollo } = this.props;
		const width = process.browser ? window.innerWidth : undefined;
		const height = process.browser ? window.innerHeight : undefined;
		const getLayout = Component.getLayout || (page => page);

		return [
			<GlobalStyles key="styles" width={width} height={height} />,
			<ContextProviders key="contexts" apollo={apollo}>
				{getLayout(<Component {...pageProps} />)}
			</ContextProviders>,
		];
	}
}

export default withApollo(MyApp);
