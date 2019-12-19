import { getNewNamed } from './requests';

const formatNewNamed = (data) => {
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

export const updateNamed = async (dispatch) => {
	dispatch({ type: 'updateStart' });
	try {
		const data = await getNewNamed();
		dispatch({
			type: 'updateSuccess',
			payload: formatNewNamed(data),
		});
	} catch (error) {
		dispatch({ type: 'updateFail', payload: error });
	}
};
