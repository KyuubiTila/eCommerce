import React from 'react';
import { LoginCard } from '../../components/cards/LoginCard';
import * as Yup from 'yup';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../stores/auth';

export const Login = () => {
  const userDetails = useAuth((state) => state.userDetails);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('You must input a name'),
    password: Yup.string().required('You must input a password'),
  });

  const initialValues = {
    name: '',
    password: '',
  };

  const loginUser = async (data) => {
    try {
      const loggedInUser = await axios.post(
        'http://localhost:3001/api/auth/login',
        data
      );

      localStorage.setItem('accessToken', loggedInUser.data.token);
      navigate('/home');
      userDetails();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  // useEffect(() => {
  // }, [userDetails]);

  return (
    <LoginCard
      validationSchema={validationSchema}
      initialValues={initialValues}
      loginUser={loginUser}
    />
  );
};
