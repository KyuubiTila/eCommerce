import React from 'react';
import { RegisterCard } from '../../components/cards/RegisterCard';

import { useAuth } from '../../stores/auth';

import * as Yup from 'yup';

export const Register = () => {
  const register = useAuth((state) => state.register);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('You must input a name'),
    email: Yup.string().required('You must input an email'),
    password: Yup.string().required('You must input a password'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <RegisterCard
      validationSchema={validationSchema}
      initialValues={initialValues}
      register={register}
    />
  );
};
