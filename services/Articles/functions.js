import { useQuery } from '@apollo/react-hooks';

import mockedArticle from './mockArticle';
import {
	GET_ARTICLE_BY_TITLEID,
} from './queries';

const formatArticle = (article) => {
	const firstSection = {
		image: article.image,
		alt: article.alt,
		title: article.title,
	};
	const sections = article.sections;
	sections[0] = {
		...sections[0],
		...firstSection,
	};
	return {
		...article,
		sections,
	};
};

export const getArticleByTitleId = (titleId) => {
	const { loading, error, data } = useQuery(GET_ARTICLE_BY_TITLEID, {
		variables: { titleId: "5d949e13c31d83415c1bd39b" },
		skip: !titleId,
	});

	// const formattedArticle = (!loading && !error) ? formatArticle(data) : data;
	const formattedArticle = (!loading && !error) ? formatArticle(mockedArticle) : mockedArticle;
	return {
		loading,
		error,
		data: formattedArticle,
	};
};
