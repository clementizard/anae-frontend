import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { PageTransition } from 'next-page-transitions';

import { MediaContextProvider } from 'Styles/common/Media';
import GlobalStyles from 'Styles/common/GlobalStyle';
import { DeviceProvider } from 'Services/Device';
import { UserProvider } from 'Services/User';
import { StatusProvider } from 'Services/Status';
import withApollo from 'Services/withApollo';

if (process.env.NODE_ENV !== 'production') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
	whyDidYouRender(React);
}

const ContextProviders = ({ children, apollo }) => (
	<MediaContextProvider>
		<ApolloProvider client={apollo}>
			<StatusProvider>
				<DeviceProvider>
					<UserProvider>
						{children}
					</UserProvider>
				</DeviceProvider>
			</StatusProvider>
		</ApolloProvider>
	</MediaContextProvider>
);

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps, apollo } = this.props;
		const width = process.browser ? window.innerWidth : undefined;
		const height = process.browser ? window.innerHeight : undefined;
		const getLayout = Component.getLayout || (page => page);

		return [
			<GlobalStyles key="styles" width={width} height={height} />,
			<ContextProviders key="contexts" apollo={apollo}>
				{getLayout(
					<PageTransition timeout={300} classNames="page-transition">
						<Component {...pageProps} />
					</PageTransition>,
				)}
			</ContextProviders>,
		];
	}
}

export default withApollo(MyApp);
