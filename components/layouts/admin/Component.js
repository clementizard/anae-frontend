import React, { memo } from 'react';

import AppBar from 'AdminComponents/common/AppBar';
import Panel from 'AdminComponents/common/Panel';
import { Container, Inner } from './Styles';
import { propTypes } from './Props';

const Admin = ({ children }) => (
	<Container>
		<AppBar />
		<Panel />
		<Inner>
			{children}
		</Inner>
	</Container>
);
Admin.propTypes = propTypes;
Admin.whyDidYouRender = true;

export default memo(Admin);
