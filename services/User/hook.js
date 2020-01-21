import { useEffect } from 'react';
import { initUser } from './functions';
import { useDevice } from '../Device';

export const useInit = () => {
	const { data: device } = useDevice();
	const callInit = initUser();

	useEffect(() => {
		if (!device.id) callInit({ variables: device, ssr: false });
	}, []);
};
