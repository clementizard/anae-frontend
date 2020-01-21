const SESSION_KEY_USER = process.env.SESSION_KEY_USER;
import { saveToSession } from '../Tools';

export default (state, action) => {
	const {
		type,
		payload,
	} = action;
	
	switch (type) {
		case 'userInit': {
			const finalState = { ...state, ...payload };
			saveToSession(finalState, SESSION_KEY_USER);
			return finalState;
		}
		default: throw new Error(`Unhandled action type: ${action.type}`);
	}
};
