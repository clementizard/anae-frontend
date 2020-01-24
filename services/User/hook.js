import { useEffect } from 'react';
import { initUser } from './functions';
import { useDevice } from '../Device';
import { useUserState } from './context';

export const useInit = () => {
	const { data: device } = useDevice();
	const { token } = useUserState();
	const callInit = initUser();

	useEffect(() => {
		if (!device.id || !token) callInit({ variables: device, ssr: false });
	}, []);
};
