import gql from 'graphql-tag';

export const INIT = gql`
	mutation init(
		$width: Int
		$height: Int
	) {
		Init(
		width: $width
		height: $height
	) {
			success
			token
			message
		}
	}
`;
export const REGISTER = gql`
	mutation register(
		$email: String!
		$password: String!
		$firstname: String
		$lastname: String
	) {
		Register(
		email: $email
		password: $password
		firstname: $firstname
		lastname: $lastname
	) {
			success
			token
			message
		}
	}
`;
export const LOGIN = gql`
	mutation login(
		$email: String!
		$password: String!
	) {
		Login(
		email: $email
		password: $password
	) {
			success
			token
			message
		}
	}
`;
