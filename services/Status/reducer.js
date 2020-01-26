import { saveToLocal } from '../Tools';

const { LOCAL_KEY_STATUS } = process.env;

const updateAndSave = (state, payload, value) => {
	const finalState = { ...state, [payload]: value };
	saveToLocal(finalState, LOCAL_KEY_STATUS);
	return finalState;
};

export default (state, action) => {
	const {
		type,
		payload,
	} = action;

	switch (type) {
	case 'start': return updateAndSave(state, payload, 'loading');
	case 'error': {
		const { type: entity, error, from } = payload;
		console.error(error);
		return updateAndSave(state, entity, from ? { [from]: 'error' } : 'error');
	}
	case 'success': return updateAndSave(state, payload, 'success');
	default: throw new Error(`Unhandled action type: ${action.type}`);
	}
};
