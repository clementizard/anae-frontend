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

const Login = () => {
	const userStatus = useStatusState(SESSION_KEY_USER);
	const callLogin = useUser('login');

	const handleLogin = values => callLogin({ variables: values, ssr: false });

	return (
		<Container>
			<Inner>
				<Typography variant="h4">Se connecter</Typography>
				<Link
					href="/auth/register"
					label="Je n'ai pas de compte, m'enregistrer"
				/>
				<Form
					onSubmit={handleLogin}
					loading={userStatus === 'loading'}
					error={userStatus && userStatus.login === 'error'}
				/>
			</Inner>
		</Container>
	);
};
Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
Login.whyDidYouRender = true;
Login.getLayout = getLayout;

export default Login;
