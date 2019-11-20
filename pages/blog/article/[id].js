import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';

import { S2, S3, S4, S5 } from 'Styles/common/Sizes';
import DeviceContext from 'Services/Device';
import { sections } from './Tools';
import S2Component from 'Components/public/Blog/Article/S2';

const Article = () => {
	const { width, height } = useContext(DeviceContext);
	const router = useRouter();
	const { id } = router.query;

	const Container = props => (
		<div
			style={{
				'--fullHeight': `${height}px`,
				'--fullWidth': `${width}px`,
			}}
			{...props}
		/>
	);
	
	if (width <= S2) {
		return useMemo(() => (
			<Container>
				<S2Component height={height} sections={sections} />
			</Container>
		), [sections])
	}
	if (width <= S3) {
		// MOBILE 1
	}
	if (width <= S4) {
		// MOBILE 1
	}
	if (width <= S5) {
		// MOBILE 1
	}
	return [];
};

export default Article;
