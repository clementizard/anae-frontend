import React from 'react';
import { Field } from 'formik';
import { Checkbox as FormikCheckbox } from 'formik-material-ui';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {} from './Styles';
import { propTypes, defaultProps } from './Props';
import FormHelperText from "@material-ui/core/FormHelperText";

const Checkbox = ({
  disabled,
  error,
  label,
  name,
  containerStyle,
  ...props
}) => {
  const CheckboxField = (
    <FormControlLabel
      disabled={disabled}
      label={label}
      style={containerStyle}
      control={
        <Field
          id={name}
          type="checkbox"
          {...props}
          component={props => <FormikCheckbox {...props} name={name} />}
        />
      }
    />
  );
  
  return error ? (
    <FormControl
      error={Boolean(error)}
      style={containerStyle}
      disabled={disabled}
    >
      {CheckboxField}
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  ) : CheckboxField;
};
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.whyDidYouRender = true;

export default Checkbox;

