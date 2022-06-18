import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/InputField';
import { makeStyles } from 'tss-react/mui';
import PasswordField from '../../../../components/form-control/PasswordField';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles()((theme) => {
  return {
    title: {
      textAlign: 'center',
    },
    avatar: {
      margin: '0 auto',
      backgroundColor: 'red !important',
    },
  };
});

function RegisterForm({ onSubmit }) {
  const { classes } = useStyles();
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required('Please enter your full name')
        .test('should has at least two words', 'Please enter at least two words', (value) => {
          return value.split(' ').length >= 2;
        }),
      email: yup.string().required('Please enter your email').email('Sai định dạng'),
      password: yup.string().required('Please enter title').min(6, 'Phải trên 5 kí tự'),
      retypePassword: yup
        .string()
        .required('Please enter retype password')
        .oneOf([yup.ref('password')], 'Mật khẩu không giống nhau'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = form;

  const handleSubmitForm = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" className={classes.title}>
        Sign up
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <InputField name="fullName" label="Fullname" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label=" Retype Password" form={form} />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
