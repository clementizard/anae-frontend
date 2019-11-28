import { useEffect } from 'react';
import { useWeatherDispatch, useWeatherState } from './context';
import { updateWeather } from './functions';

export default () => {
	const { status, data } = useWeatherState();
	const dispatch = useWeatherDispatch();
	
	useEffect(() => {
		if (!data.length) updateWeather(dispatch);
	}, []);
	
	return { status, data };
}
