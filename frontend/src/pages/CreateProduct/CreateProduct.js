import React from 'react';
import { useProducts } from '../../stores/productStore';

import CreateProductCard from '../../components/cards/CreateProductCard';

import * as Yup from 'yup';

const CreateProduct = () => {
  const addProduct = useProducts((state) => state.addProduct);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('You must input a name'),
    description: Yup.string().required('You must send a description'),
    brand: Yup.string().required('You must input a brand'),
    category: Yup.string().required('You must send a category'),
    price: Yup.number().required('You must input a price'),
    image: Yup.mixed().required('You must upload an image file'),
  });

  const initialValues = {
    name: '',
    description: '',
    brand: '',
    category: '',
    price: '',
    image: '',
  };

  return (
    <div className="flex flex-wrap justify-center lg:flex-row">
      <div className="flex flex-wrap justify-center pt-14 lg:flex-row">
        <CreateProductCard
          addProduct={addProduct}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      </div>
    </div>
  );
};

export default CreateProduct;
