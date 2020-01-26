import { saveToSession } from '../Tools';

const { SESSION_KEY_USER } = process.env;

export default (state, action) => {
	const { type, payload } = action;

	switch (type) {
	case 'userLoaded':
		const finalState = { ...state, ...payload };
		saveToSession(finalState, SESSION_KEY_USER);
		return finalState;
	default: throw new Error(`Unhandled action type: ${action.type}`);
	}
};
