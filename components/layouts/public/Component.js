import React, { memo, useMemo } from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { Media } from 'Styles/common/Media';
import Nav from 'PublicComponents/common/Nav';
import IconButton from 'CommonComponents/IconButton';
import { Inner } from './Styles';
import { propTypes, defaultProps } from './Props';

const Public = ({ children }) => (
	<>
		<Media at="s1">
			<IconButton
				href="/blog"
				ariaLabel="back"
				Icon={ArrowBack}
				containerStyles={{
					position: 'fixed',
					top: 12,
					left: 12,
				}}
			/>
			{children}
		</Media>
		<Media at="s2">
			<Nav />
			<Inner>
				{children}
			</Inner>
		</Media>
	</>
);
Public.propTypes = propTypes;
Public.defaultProps = defaultProps;
Public.whyDidYouRender = true;

export default Public;
