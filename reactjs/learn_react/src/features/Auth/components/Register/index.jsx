import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux/es/exports';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // auto set usename = email
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('new user', user);
      enqueueSnackbar('Register successfully 😊😊😊', { variant: 'success' });
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
