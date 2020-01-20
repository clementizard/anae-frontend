export default (state, action) => {
	const {
		type,
		payload,
	} = action;
	
	switch (type) {
		case 'initStart': return { ...state, status: 'loading' };
		case 'initFail': return { ...state, status: 'error', data: payload };
		case 'initSuccess': {
			return {
				...state,
				status: 'success',
				data: {
					...state.data,
					...payload,
				},
			};
		}
		default: throw new Error(`Unhandled action type: ${action.type}`);
	}
};
