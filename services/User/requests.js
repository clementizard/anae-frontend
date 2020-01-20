import mock from './mock';

export const getNewUser = async () => {
	return await new Promise((resolve) => {
		setTimeout(() => resolve(mock), 1000);
	});
};
