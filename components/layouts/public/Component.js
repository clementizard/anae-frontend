import React, { memo } from 'react';

import Nav from 'PublicComponents/common/Nav';
import Footer from 'PublicComponents/common/Footer';
import { Inner } from './Styles';
import { propTypes, defaultProps } from './Props';

const Public = ({ children }) => (
	<>
		<Nav />
		<Inner>
			{children}
		</Inner>
		<Footer />
	</>
);
Public.propTypes = propTypes;
Public.defaultProps = defaultProps;
Public.whyDidYouRender = true;

export default memo(Public);
