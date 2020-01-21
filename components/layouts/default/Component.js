import React, { memo, useMemo } from 'react';

import { useInit } from 'Services/User/hook';
import { propTypes } from './Props';

const Default = ({ children }) => {
	useInit();
	
	return useMemo(() => children, []);
};
Default.propTypes = propTypes;
Default.whyDidYouRender = true;

export default memo(Default);
