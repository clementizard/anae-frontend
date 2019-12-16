import React from 'react';

import { Media } from 'Styles/common/Media';
import Nav from 'PublicComponents/common/Nav';
import Footer from 'PublicComponents/common/Footer';
import { Inner } from './Styles';
import { propTypes, defaultProps } from './Props';

const Public = ({ children }) => (
	<>
		<Media at="s1">
			{children}
			<Footer />
		</Media>
		<Media greaterThanOrEqual="s2">
			<Nav />
			<Inner>
				{children}
			</Inner>
			<Footer />
		</Media>
	</>
);
Public.propTypes = propTypes;
Public.defaultProps = defaultProps;
Public.whyDidYouRender = true;

export default Public;
