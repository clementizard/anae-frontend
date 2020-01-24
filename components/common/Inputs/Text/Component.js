import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import { TextField } from 'formik-material-ui';

// import {} from './Styles';
import { propTypes, defaultProps } from './Props';

const Text = ({
  name,
  containerStyle,
  form,
  ...props
}) => {
  const bundledProps = {
    name,
    id: name,
    key: name,
    style: containerStyle,
    variant: 'outlined',
    fullWidth: true,
    // Todo: InputProps-labelWidth based on label length
    ...props
  };

  return form ? <TextField {...bundledProps} /> : <MuiTextField {...bundledProps} />;
};
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
Text.whyDidYouRender = true;

export default Text;

