import { useRouter } from 'next/router';
import React, { memo, useMemo } from 'react';

import { Media } from 'Styles/common/Media';
import PublicLayout from 'Components/layouts/public';
import { sections } from './Tools';
import S1Component from 'Components/public/Blog/Article/S1';
import S2Component from 'Components/public/Blog/Article/S2';
import {useDevice} from "../../../services/Device/context";

const Article = () => {
	const { width, height } = useDevice();
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
			{children}
		</div>
	);

	return (
		<Container>
			<Media at="s1">
				<S1Component height={height} sections={sections} />
			</Media>
			<Media at="s2">
				<S2Component height={height} sections={sections} />
			</Media>
		</Container>
	);
};
Article.Layout = PublicLayout;
Article.whyDidYouRender = true;

export default Article;
