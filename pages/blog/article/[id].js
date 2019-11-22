import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { S1, S2, S3, S4, S5 } from 'Styles/common/Sizes';
import DeviceContext from 'Services/Device';
import { sections } from './Tools';
import S1Component from 'Components/public/Blog/Article/S1';
import S2Component from 'Components/public/Blog/Article/S2';
import { ReturnBtn } from 'Components/public/Blog/Article/S2/Styles';

const Article = () => {
	const { width, height } = useContext(DeviceContext);
	const router = useRouter();
	const { id } = router.query;

	const Container = ({ children, ...props }) => (
		<div
			style={{
				'--fullHeight': `${height}px`,
				'--fullWidth': `${width}px`,
			}}
			{...props}
		>
			<ReturnBtn>
				<a href="/blog">
					<IconButton aria-label="back">
						<ArrowBack />
					</IconButton>
				</a>
			</ReturnBtn>
			{children}
		</div>
	);
	
	if (width <= S1) {
		return useMemo(() => (
			<Container>
				<S1Component height={height} sections={sections} />
			</Container>
		), [sections]);
	}
	else if (width <= S2) {
		return useMemo(() => (
			<Container>
				<S2Component height={height} sections={sections} />
			</Container>
		), [sections]);
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
