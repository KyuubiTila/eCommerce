import React from 'react';
import { ShippingAddressCard } from '../../components/cards/ShippingAddressCard';
import axios from 'axios';
import * as Yup from 'yup';
import { shippingAddress } from '../../stores/shippingAddress';
import { useEffect } from 'react';

export const ShippingAddress = () => {
  const fetchAddress = shippingAddress((state) => state.fetchAddress);
  const address = shippingAddress((state) => state.address);

  useEffect(() => {
    fetchAddress();
  }, [fetchAddress]);

  const validationSchema = Yup.object().shape({
    address: Yup.string().required('You must input your address'),
    city: Yup.string().required('You must input your city'),
    postalCode: Yup.number().required('You must input your postalCode'),
    country: Yup.string().required('You must input your country'),
  });

  const initialValues = {
    address: address ? address.address : '',
    city: address ? address.city : '',
    postalCode: address ? address.postalCode : '',
    country: address ? address.country : '',
  };

  const updateShippingAddress = async (data) => {
    try {
      await axios.put(
        'http://localhost:3001/api/ShippingAddress/updateAddress',
        data,
        {
          headers: {
            accessToken: localStorage.getItem('accessToken'),
          },
        }
      );

      // on execution it should redirect ie navigate to the showProduct page
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <ShippingAddressCard
      validationSchema={validationSchema}
      initialValues={initialValues}
      updateShippingAddress={updateShippingAddress}
    />
  );
};
