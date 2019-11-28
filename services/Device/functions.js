import { getNewWeather } from './requests';

const formatNewWeather = (data) => {
	data.forEach((metric) => {
		if (metric.services) {
			metric.onServices = [];
			metric.warnServices = [];
			metric.offServices = [];
			metric.services.forEach((service) => {
				if (service.status === 'ko') metric.offServices.push(service);
				else if (service.status === 'warn') metric.warnServices.push(service);
				else metric.onServices.push(service);
			});
			if (!metric.status) {
				metric.status = {
					ok: !metric.offServices.length,
					valid: metric.onServices.length,
					total: metric.onServices.length + metric.offServices.length,
				};
			}
		}
	});
	return data;
};

export const updateWeather = async (dispatch) => {
	dispatch({ type: 'updateStart' });
	try {
		const data = await getNewWeather();
		dispatch({
			type: 'updateSuccess',
			payload: formatNewWeather(data),
		});
	} catch (error) {
		dispatch({ type: 'updateFail', payload: error });
	}
};
