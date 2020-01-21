const capitalize = ([firstLetter, ...rest]) => [firstLetter.toLocaleUpperCase(), ...rest].join('');

/* Used to format result from device-detector-js to database shape */
export const formatDevice = (device) => {
	const out = {};
	
	Object.keys(device).forEach((devKey) => {
		if (device[devKey]) {
			Object.keys(device[devKey]).forEach((info) => {
				const value = device[devKey][info];
				if (value) {
					const key = devKey === 'device' ? info : `${devKey}${capitalize(info)}`;
					out[key] = value;
				}
			});
		}
	});
	return out;
};
