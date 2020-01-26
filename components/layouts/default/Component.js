import React, { useMemo } from 'react';

import { useInit } from 'Services/User/hook';
import { propTypes } from './Props';

const Default = ({ children }) => {
	useInit();

	return useMemo(() => children, [children]);
};
Default.propTypes = propTypes;
Default.whyDidYouRender = true;

export default Default;
