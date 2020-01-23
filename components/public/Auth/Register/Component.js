import React, { useCallback } from 'react';
import Typography from '@material-ui/core/Typography';

import {
  useUserState,
  // useRegister,
} from 'Services/User';
import { useStatusState } from 'Services/Status';
import { getLayout } from 'Layouts/public';
import { Container } from '../common/Styles';
import { propTypes, defaultProps } from './Props';
import Form from './Form';

const SESSION_KEY_USER = process.env.SESSION_KEY_USER;

const Register = () => {
  const data = useStatusState();
  const userStatus = data[SESSION_KEY_USER];
  const userState = useUserState();
  
  const handleRegister = useCallback((values) => {
    console.log('Values: ', values);
  }, []);

  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: 40 }}>Creer un compte</Typography>
      <Form handleRegister={handleRegister}/>
    </Container>
  );
};
Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
Register.whyDidYouRender = true;
Register.getLayout = getLayout;

export default Register;

