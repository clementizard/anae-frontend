import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SizeContext from '../../contexts/Size';
import GlobalStyle from '../../styles/common/globalStyle';
import GatePublic from '../public/Gate/index.js';
import { Urls } from './Tools';
import useWindowSize from '../../tools/Hooks/windowSize';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

const ContextsProviders = ({ children }) => {
	const { width, height } = useWindowSize();
	
	return (
		<SizeContext.Provider value={{ width, height }}>
			{children}
		</SizeContext.Provider>
	);
};

const App = () => (
	<>
		<GlobalStyle/>
		<ContextsProviders>
			<Switch>
				<Route exact path="/" component={GatePublic}/>
				<Route path={Urls.public} component={GatePublic}/>
			</Switch>
		</ContextsProviders>
	</>
);
App.whyDidYouRender = true;

export default App;
