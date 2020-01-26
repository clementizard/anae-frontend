import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import {
  useUserState,
  registerUser,
} from 'Services/User';
import { useStatusState } from 'Services/Status';
import { getLayout } from 'Layouts/public';
import { Container } from '../common/Styles';
import { Inner, LinkButton } from './Styles';
import { propTypes, defaultProps } from './Props';
import Form from './Form';

const SESSION_KEY_USER = process.env.SESSION_KEY_USER;

const Register = () => {
  const userStatus = useStatusState(SESSION_KEY_USER);
  const userState = useUserState();
  const callRegister = registerUser();

  const handleRegister = values => callRegister({ variables: values, ssr: false });

  return (
    <Container>
      <Inner>
        <Typography variant="h4">Creer un compte</Typography>
        <Typography variant="span"><Link href="/auth/login"><LinkButton>J'ai deja un compte</LinkButton></Link></Typography>
        <Form
          handleRegister={handleRegister}
          loading={userStatus === 'loading'}
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
