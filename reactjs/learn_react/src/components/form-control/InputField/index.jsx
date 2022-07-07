import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;
  const hasError = errors[name];
  console.log(errors[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, value } }) => (
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          onChange={onChange}
          value={value}
          disabled={disabled}
          error={!!hasError}
          helperText={errors[name]?.message}
        />
      )}
    ></Controller>
  );
}

export default InputField;
