import React, { useCallback, useState } from 'react';
import { Form, Formik } from 'formik';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

import Text from 'Inputs/Text';
import Checkbox from 'Inputs/Checkbox';
import { propTypes, defaultProps } from './Props';
import { initialValues, RegisterSchema } from './Tools';

const RegisterForm = ({ handleRegister }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const handlePasswordVisibilityChange = useCallback(() => setPasswordVisible(!passwordVisible), [passwordVisible]);
  const handleMouseDownPassword = useCallback(e => e.preventDefault(), []);

  const textStyle = { marginBottom: 24 };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegister}
      validationSchema={RegisterSchema}
    >
      {({ isSubmitting, errors: { legal: legalE }, touched: { legal: legalT } }) => (
        <Form>
          <Text
            name="lastname"
            label="Nom"
            InputProps={{ labelWidth: 35 }}
            form
            containerStyle={textStyle}
          />
          <br />
          <Text
            name="firstname"
            label="Prenom"
            InputProps={{ labelWidth: 60 }}
            form
            containerStyle={textStyle}
          />
          <br />
          <Text
            name="email"
            label="Email *"
            InputProps={{ labelWidth: 50 }}
            form
            containerStyle={textStyle}
          />
          <Text
            name="password"
            label="Mot de passe *"
            type={passwordVisible ? 'text' : 'password'}
            form
            containerStyle={textStyle}
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
              )
            }}
          />
          <Checkbox
            name="legal"
            label="J'accepte les termes et conditions d'utilisation *"
            disabled={isSubmitting}
            error={legalT && legalE}
            containerStyle={{ marginBottom: 8, marginLeft: 8 }}
          />
          <Checkbox
            name="newsletter"
            label="S'abonner a notre newsletter"
            disabled={isSubmitting}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            containerStyle={{ marginBottom: 24, marginLeft: 8 }}
          />
          <br />
          <Button
            variant="contained"
            disabled={isSubmitting}
            type="submit"
            fullWidth
            color="primary"
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

