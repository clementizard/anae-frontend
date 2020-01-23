import React, {useCallback, useState} from 'react';
import { Field, Form, Formik } from 'formik';
import {Checkbox, TextField} from 'formik-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

import { propTypes, defaultProps } from './Props';
import { initialValues, RegisterSchema } from './Tools';


const Text = ({ name, ...props }) => (
  <TextField
    key={name}
    id={name}
    name={name}
    variant="outlined"
    fullWidth
    style={{ marginBottom: 24 }}
    {...props}
  />
);


const CheckboxField = ({
  name,
  label,
  disabled,
  containerStyle,
  ...props
}) => (
  <FormControlLabel
    disabled={disabled}
    label={label}
    style={containerStyle}
    control={
      <Field
        id={name}
        name={name}
        type="checkbox"
        {...props}
        component={props => <Checkbox {...props} name={name} />}
      />
    }
  />
);

const CheckboxWithErrorField = ({
  disabled,
  errors,
  label,
  name,
  ...props
}) => (
  <FormControl
    error={Boolean(errors[name])}
    style={{ marginBottom: 8 }}
    disabled={disabled}
  >
    <CheckboxField
      name={name}
      label={label}
      disabled={disabled}
      {...props}
    />
    <FormHelperText>{errors[name]}</FormHelperText>
  </FormControl>

);

const RegisterForm = ({ handleRegister }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const handlePasswordVisibilityChange = useCallback(() => setPasswordVisible(!passwordVisible), [passwordVisible]);
  const handleMouseDownPassword = useCallback(e => e.preventDefault(), []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegister}
      validationSchema={RegisterSchema}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <Text
            name="lastname"
            label="Nom"
            InputProps={{ labelWidth: 35 }}
          />
          <br />
          <Text
            name="firstname"
            label="Prenom"
            InputProps={{ labelWidth: 60 }}
          />
          <br />
          <Text
            name="email"
            label="Email *"
            InputProps={{ labelWidth: 50 }}
          />
          <Text
            name="password"
            label="Mot de passe *"
            type={passwordVisible ? 'text' : 'password'}
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
          <CheckboxWithErrorField
            label="J'accepte les termes et conditions d'utilisation *"
            name="legal"
            disabled={isSubmitting}
            errors={errors}
          />
          <br />
          <CheckboxField
            name="newsletter"
            label="S'abonner a notre newsletter"
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            containerStyle={{ marginBottom: 24 }}
            disabled={isSubmitting}
          />
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

