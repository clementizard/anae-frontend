import React from 'react';
import Typography from '@material-ui/core/Typography';

import Link from 'CommonComponents/Link';
import { useUser } from 'Services/User';
import { useStatusState } from 'Services/Status';
import { getLayout } from 'Layouts/public';
import { Container } from '../common/Styles';
import { Inner } from './Styles';
import { propTypes, defaultProps } from './Props';
import Form from './Form';

const { SESSION_KEY_USER } = process.env;

const Register = () => {
	const userStatus = useStatusState(SESSION_KEY_USER);
	const callRegister = useUser('register');

	const handleRegister = values => callRegister({ variables: values, ssr: false });

	console.log('In Login', userStatus);
	return (
		<Container>
			<Inner>
				<Typography variant="h4">Creer un compte</Typography>
				<Link
					href="/auth/login"
					label="J'ai deja un compte"
				/>
				<Form
					onSubmit={handleRegister}
					loading={userStatus === 'loading'}
					error={userStatus && userStatus.register === 'error'}
				/>
			</Inner>
		</Container>
	);
};
Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
Register.whyDidYouRender = true;
Register.getLayout = getLayout;

export default Register;
