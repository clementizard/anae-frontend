export default (state, action) => {
	switch (action.type) {
		case 'updateStart': return { status: 'loading' };
		case 'updateSuccess': return { status: 'success', data: action.payload };
		case 'updateFail': return { status: 'error', data: action.payload };
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
};
