import React from 'react';
import { useEffect } from 'react';
import { ProductCard } from '../../components/cards/ProductCard';
import { useAuth } from '../../stores/auth';
import { useProducts } from '../../stores/productStore';

export const HomePage = () => {
  const fetchProducts = useProducts((state) => state.fetchProducts);
  const products = useProducts((state) => state.products);
  const userDetails = useAuth((state) => state.userDetails);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      fetchProducts();
      userDetails();
    } else {
      fetchProducts();
    }
  }, [fetchProducts, userDetails]);
  return (
    <div className="flex flex-wrap justify-center lg:flex-row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
