import React, {
  useCallback,
  useState,
} from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import { getLayout } from 'Layouts/public';
import { Container } from '../common/Styles';
import { propTypes, defaultProps } from './Props';
import { initialValues, RegisterSchema } from './Tools';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const handlePasswordVisibilityChange = useCallback(() => {
    console.log('handlePasswordVisibilityChange', passwordVisible);
    setPasswordVisible(!passwordVisible);
  }, [passwordVisible]);
  const handleMouseDownPassword = useCallback(e => e.preventDefault(), []);
  const handleRegister = useCallback((values) => {
    console.log('Values: ', values);
  }, []);

  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: 40 }}>Creer un compte</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleRegister}
        validationSchema={RegisterSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextField
	            key="lastname"
	            id="lastname"
              name="lastname"
              label="Nom"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 24 }}
              InputProps={{ labelWidth: 50 }}
            />
            <br />
            <TextField
              key="firstname"
              id="firstname"
              name="firstname"
              label="Prenom"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 24 }}
              InputProps={{ labelWidth: 50 }}
            />
            <br />
            <TextField
              key="email"
              id="email"
              name="email"
              label="Email *"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 24 }}
              InputProps={{ labelWidth: 50 }}
            />
            <br />
            <TextField
              key="password"
              id="password"
              name="password"
              label="Mot de passe *"
              variant="outlined"
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
              fullWidth
              type={passwordVisible ? 'text' : 'password'}
            />
            <br />
            <FormControlLabel
              control={
                <MuiCheckbox
                  // checked={state.checkedB}
                  // onChange={handleChange('checkedB')}
                  value="legal"
                  color="primary"
                />
              }
              label="Primary"
            />
            <FormControlLabel
              label="S'abonner a notre newsletter"
              control={
                <Field
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  component={CheckboxWithLabel}
                />
              }
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
    </Container>
  );
};
Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
Register.whyDidYouRender = true;
Register.getLayout = getLayout;

export default Register;

