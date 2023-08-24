import React from 'react';
import { ProductCard } from '../../components/cards/ProductCard';
import { products } from '../../components/products/products';

export const HomePage = () => {
  return (
    <div className="flex flex-wrap justify-center lg:flex-row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
