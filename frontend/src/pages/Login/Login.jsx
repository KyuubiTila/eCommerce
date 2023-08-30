import React from 'react';
import { LoginCard } from '../../components/cards/LoginCard';
import * as Yup from 'yup';
import { useAuth } from '../../stores/auth';

export const Login = () => {
  const loginUser = useAuth((state) => state.loginUser);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('You must input a name'),
    password: Yup.string().required('You must input a password'),
  });

  const initialValues = {
    name: '',
    password: '',
  };

  return (
    <LoginCard
      validationSchema={validationSchema}
      initialValues={initialValues}
      loginUser={loginUser}
    />
  );
};
