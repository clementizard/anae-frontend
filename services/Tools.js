export const getFromLocalOrDefault = (defaultState, key) => {
	if (process.browser) {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : defaultState;
	}
	return defaultState;
};
export const getFromSessionOrDefault = (defaultState, key) => {
	if (process.browser) {
		const item = sessionStorage.getItem(key);
		return item ? JSON.parse(item) : defaultState;
	}
	return defaultState;
};
export const saveToLocal = (state, key) =>{
	if (process.browser) localStorage.setItem(key, JSON.stringify(state));
};
export const saveToSession = (state, key) =>{
	if (process.browser) sessionStorage.setItem(key, JSON.stringify(state));
};
