import { useRouter } from 'next/router';
import React from 'react';

import {
	getArticleByTitleId,
} from 'Services/Articles';
import { Media } from 'Styles/common/Media';
import { getLayout } from 'Layouts/public';
import S1Component from 'Components/public/Blog/Article/S1';
import S2Component from 'Components/public/Blog/Article/S2';

const Article = () => {
	const router = useRouter();
	const { id } = router.query;
	const height = process.browser ? window.innerHeight : undefined;
	const {
		loading,
		error,
		data,
	} = getArticleByTitleId(id);

	return (
		<>
			<Media at="s1">
				<S1Component
					height={height}
					article={data}
					loading={loading}
				/>
			</Media>
			<Media greaterThanOrEqual="s2">
				<S2Component
					height={height}
					article={data}
					loading={loading}
				/>
			</Media>
		</>
	);
};
Article.getLayout = getLayout;
Article.whyDidYouRender = true;

export default Article;
