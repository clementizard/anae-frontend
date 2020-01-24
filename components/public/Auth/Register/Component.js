import React from 'react';
import Typography from '@material-ui/core/Typography';

import {
  useUserState,
  registerUser,
} from 'Services/User';
import { useStatusState } from 'Services/Status';
import { getLayout } from 'Layouts/public';
import { Container } from '../common/Styles';
import { propTypes, defaultProps } from './Props';
import Form from './Form';

const SESSION_KEY_USER = process.env.SESSION_KEY_USER;

const Register = () => {
  const userStatus = useStatusState(SESSION_KEY_USER);
  const userState = useUserState();
  const callRegister = registerUser();

  const handleRegister = values => callRegister({ variables: values, ssr: false });
  
  console.log('Status: ', userStatus);
  console.log('State: ', userState);
  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: 40 }}>Creer un compte</Typography>
      <Form
        handleRegister={handleRegister}
        loading={userStatus === 'loading'}
      />
    </Container>
  );
};
Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
Register.whyDidYouRender = true;
Register.getLayout = getLayout;

export default Register;
