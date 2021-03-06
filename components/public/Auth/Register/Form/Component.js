import React, { useCallback, useState } from 'react';
import { Form, Formik } from 'formik';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

import Link from 'CommonComponents/Link';
import Text from 'Inputs/Text';
import Checkbox from 'Inputs/Checkbox';
import { propTypes, defaultProps } from './Props';
import { initialValues, RegisterSchema } from './Tools';

const RegisterForm = ({ onSubmit, loading, error }) => {
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
			{({ isSubmitting, errors: { legal: legalE }, touched: { legal: legalT } }) => (
				<Form>
					<Text
						name="lastname"
						label="Nom"
						InputProps={{ labelWidth: 35 }}
						form
						containerStyle={{ ...textStyle, gridArea: 'lastname' }}
					/>
					<Text
						name="firstname"
						label="Prenom"
						InputProps={{ labelWidth: 60 }}
						form
						containerStyle={{ ...textStyle, gridArea: 'firstname' }}
					/>
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
					<Checkbox
						name="legal"
						label="J'accepte les termes et conditions d'utilisation *"
						disabled={isSubmitting}
						error={legalT && legalE}
						containerStyle={{ marginBottom: 8, gridArea: 'legal' }}
					/>
					<Checkbox
						name="newsletter"
						label="S'abonner a notre newsletter"
						disabled={isSubmitting}
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite />}
						containerStyle={{ marginBottom: error ? 8 : 24, gridArea: 'newsletter' }}
					/>
					{error && (
						<div style={{ gridArea: 'error', marginBottom: 24 }}>
							<Typography
								variant="body1"
								style={{
									color: 'red',
									width: 'auto',
									display: 'inline-block',
									marginRight: 8,
								}}
							>
								L'adresse email est deja utilisee.
							</Typography>
							<Link
								href="/auth/login"
								label="Se connecter"
								containerStyle={{ display: 'inline-block', width: 'auto' }}
							/>
						</div>
					)}
					<Button
						variant="contained"
						disabled={isSubmitting}
						type="submit"
						fullWidth
						color="primary"
						style={{ marginBottom: 12, gridArea: 'submit' }}
					>
            Valider
					</Button>
				</Form>
			)}
		</Formik>
	);
};
RegisterForm.propTypes = propTypes;
RegisterForm.defaultProps = defaultProps;
RegisterForm.whyDidYouRender = true;

export default RegisterForm;
