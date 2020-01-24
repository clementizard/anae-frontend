import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const GRAPHQL_URL = process.env.GRAPHQL_URL;
const SESSION_KEY_USER = process.env.SESSION_KEY_USER;

export default withApollo(
	({
		 ctx,
		 headers,
		 initialState,
	}) =>
		new ApolloClient({
			uri: GRAPHQL_URL,
			request: (operation) => {
				const user = sessionStorage.getItem(SESSION_KEY_USER);
				if (user) {
					const { token } = JSON.parse(user);
					operation.setContext({
						headers: {
							authorization: token,
						},
					});
				}
			},
			cache: new InMemoryCache().restore(initialState || {}),
		}, {
			getDataFromTree: 'never',
		})
);
