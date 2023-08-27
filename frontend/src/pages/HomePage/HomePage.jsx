import React from 'react';
import { useEffect } from 'react';
import { ProductCard } from '../../components/cards/ProductCard';
import { useProducts } from '../../stores/productStore';

export const HomePage = () => {
  const fetchProducts = useProducts((state) => state.fetchProducts);
  const products = useProducts((state) => state.products);

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-wrap justify-center lg:flex-row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
