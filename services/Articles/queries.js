import gql from 'graphql-tag';

export const GET_ARTICLE_BY_TITLEID = gql`
	query getArticleByTitleId($titleId: String!) {
		getArticle(id: $titleId) {
			title
			description
			created
		}
	}
`;
