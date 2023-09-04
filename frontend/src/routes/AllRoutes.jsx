import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { HomePage } from '../pages/HomePage';
import { IndividualProduct } from '../pages/IndividualProduct/IndividualProduct';
import CreateProduct from '../pages/CreateProduct/CreateProduct';
import { CartPage } from '../pages/CartPage';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login/Login';
import { ShippingAddress } from '../pages/ShippingAddress';
import { PaymentPage } from '../pages/PaymentOption/PaymentPage';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/individualProduct/:id" element={<IndividualProduct />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shippingAddress" element={<ShippingAddress />} />
        <Route path="/paymentPage" element={<PaymentPage />} />
      </Routes>
    </>
  );
};
