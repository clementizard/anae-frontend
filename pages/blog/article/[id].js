import { useRouter } from 'next/router';
import React from 'react';

import { useDevice } from 'Services/Device/context';
import { Media } from 'Styles/common/Media';
import PublicLayout from 'Components/layouts/public';
import S1Component from 'Components/public/Blog/Article/S1';
import S2Component from 'Components/public/Blog/Article/S2';
import { sections } from './Tools';

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
