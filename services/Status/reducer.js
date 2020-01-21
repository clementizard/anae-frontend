const LOCAL_KEY_STATUS = process.env.LOCAL_KEY_STATUS;
import { saveToLocal } from '../Tools';

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
			const { type: entity, error } = payload;
			console.error(error);
			return updateAndSave(state, entity, 'error');
		}
		case 'success': return updateAndSave(state, payload, 'success');
		default: throw new Error(`Unhandled action type: ${action.type}`);
	}
};
