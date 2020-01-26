import React, { useCallback, useState } from 'react';
import { Form, Formik } from 'formik';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

import Text from 'Inputs/Text';
import Link from 'CommonComponents/Link';
import { propTypes, defaultProps } from './Props';
import { initialValues, RegisterSchema } from './Tools';

const LoginForm = ({ onSubmit, loading, error }) => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	const handlePasswordVisibilityChange = useCallback(
		() => setPasswordVisible(!passwordVisible), [passwordVisible]);
	const handleMouseDownPassword = useCallback(e => e.preventDefault(), []);

	const textStyle = { marginBottom: 24 };

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={RegisterSchema}
		>
			{({ isSubmitting }) => (
				<Form>
					<Text
						name="email"
						label="Email *"
						InputProps={{ labelWidth: 50 }}
						form
						containerStyle={{ ...textStyle, gridArea: 'email' }}
					/>
					<Text
						name="password"
						label="Mot de passe *"
						type={passwordVisible ? 'text' : 'password'}
						form
						containerStyle={{ ...textStyle, gridArea: 'password' }}
						InputProps={{
							labelWidth: 108,
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handlePasswordVisibilityChange}
										onMouseDown={handleMouseDownPassword}
									>
										{passwordVisible ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					{error && (
						<Typography
							variant="body1"
							style={{
								color: 'red',
								gridArea: 'error',
								marginBottom: 12,
							}}
						>
							Email ou mot de passe incorrect
						</Typography>
					)}
					<Button
						variant="contained"
						disabled={isSubmitting || loading}
						type="submit"
						fullWidth
						color="primary"
						style={{ marginBottom: 12, gridArea: 'submit' }}
					>
						Valider
					</Button>
					<Link
						type="button"
						href="/auth/recover"
						label="J'ai oublie mon mot de passe"
						containerStyle={{ gridArea: 'recover' }}
					/>
				</Form>
			)}
		</Formik>
	);
};
LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;
LoginForm.whyDidYouRender = true;

export default LoginForm;
