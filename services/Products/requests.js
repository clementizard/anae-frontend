// import axios from 'axios';
import mock from './mock';

export const getNewWeather = async () => {
	// return await axios.get('https://jsonplaceholder.typicode.com/posts');
	return await new Promise((resolve) => {
		setTimeout(() => resolve(mock), 1000);
	});
};

