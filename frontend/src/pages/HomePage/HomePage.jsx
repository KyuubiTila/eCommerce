import React from 'react';
import { useEffect } from 'react';
import { ProductCard } from '../../components/cards/ProductCard';
import { useAuth } from '../../stores/auth';
import { useProducts } from '../../stores/productStore';
import { shippingAddress } from '../../stores/shippingAddress';

export const HomePage = () => {
  const fetchProducts = useProducts((state) => state.fetchProducts);
  const fetchAddress = shippingAddress((state) => state.fetchAddress);
  const products = useProducts((state) => state.products);
  const loggedIn = useAuth((state) => state.loggedIn);

  useEffect(() => {
    fetchProducts();
    loggedIn ? fetchAddress() : fetchProducts();
  }, [fetchProducts, fetchAddress, loggedIn]);
  return (
    <div className="flex flex-wrap justify-center lg:flex-row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
