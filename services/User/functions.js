import { getNewUser } from './requests';

const formatNewUser = (data) => {
	data.forEach((metric) => {
		metric.onServices = [];
		metric.offServices = [];
		metric.services.forEach((service) => {
			if (service.status === 'off') metric.offServices.push(service);
			else metric.onServices.push(service);
		});
		metric.status = {
			ok: !metric.offServices.length,
			valid: metric.onServices.length,
			total: metric.onServices.length + metric.offServices.length,
		};
	});
	return data;
};

export const updateUser = async (dispatch) => {
	dispatch({ type: 'updateStart' });
	try {
		const data = await getNewUser();
		dispatch({
			type: 'updateSuccess',
			payload: formatNewUser(data),
		});
	} catch (error) {
		dispatch({ type: 'updateFail', payload: error });
	}
};
