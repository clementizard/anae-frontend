// only rendered on the server side
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';

import { mediaStyle } from 'Styles/common/Media';

if (process.env.NODE_ENV !== 'production') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
	whyDidYouRender(React);
}

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const sheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheets.collect(sheet.collectStyles(<App {...props} />)),
				});
			
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
						{sheets.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}
	
	render () {
		return (
			<html>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta charSet="utf-8"/>
				<meta name="description"
				      content="Créations de bijoux fabriqués à la main avec de véritables pierres naturelles."/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico" type="image/x-icon"/>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
				<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
				<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
				<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
				<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
				<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
				<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
				<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
				<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
				<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
				<meta name="msapplication-TileColor" content="#ffffff"/>
				<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
				<meta name="theme-color" content="#ffffff"/>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no, minimal-ui"
					key="viewport"
				/>
				<meta
					name="theme-color"
					content="white"
				/>
				<style type="text/css">{mediaStyle}</style>
				{this.props.styleTags}
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
			</html>
		);
	}
}
