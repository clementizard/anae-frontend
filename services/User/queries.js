import gql from 'graphql-tag';

export const INIT = gql`
	mutation init(
		$deviceId: String
	  $type: String
	  $brand: String
	  $model: String
	  $width: Int
	  $height: Int
	  $clientType: String
	  $clientName: String
	  $clientVersion: String
	  $clientEngine: String
	  $clientEngineVersion: String
	  $osName: String
	  $osVersion: String
	  $osPlatform: String
	  $botName: String
	  $botCategory: String
	  $botUrl: String
	  $botProducerName: String
	  $botProducerUrl: String
	) {
		Init(
	    deviceId: $deviceId
      type: $type
      brand: $brand
      model: $model
      width: $width
      height: $height
      clientType: $clientType
      clientName: $clientName
      clientVersion: $clientVersion
      clientEngine: $clientEngine
      clientEngineVersion: $clientEngineVersion
      osName: $osName
      osVersion: $osVersion
      osPlatform: $osPlatform
      botName: $botName
      botCategory: $botCategory
      botUrl: $botUrl
      botProducerName: $botProducerName
      botProducerUrl: $botProducerUrl
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
		$newsletter: Boolean
	) {
		Register(
		email: $email
		password: $password
		firstname: $firstname
		lastname: $lastname
		newsletter: $newsletter
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
