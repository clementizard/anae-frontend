import { useRouter } from 'next/router';
import React from 'react';

import { Media } from 'Styles/common/Media';
import { getLayout } from 'Layouts/public';
import S1Component from 'Components/public/Blog/Article/S1';
import S2Component from 'Components/public/Blog/Article/S2';
import { sections } from './Tools';

const Article = () => {
	const router = useRouter();
	const { id } = router.query;
	const height = process.browser ? window.innerHeight : undefined;

	return (
		<div id="page">
			<Media at="s1">
				<S1Component height={height} sections={sections} />
			</Media>
			<Media at="s2">
				<S2Component height={height} sections={sections} />
			</Media>
		</div>
	);
};
Article.getLayout = getLayout;
Article.whyDidYouRender = true;

export default Article;
