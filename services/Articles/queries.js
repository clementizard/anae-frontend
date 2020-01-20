import gql from 'graphql-tag';

export const GET_ARTICLE_BY_TITLEID = gql`
	query getArticleById($id: String!) {
		ArticleById(id: $id) {
			title
			description
			created
		}
	}
`;
export const GET_ARTICLES = gql`
	query getAllArticles {
		AllArticles {
			title
			description
		}
	}
`;
