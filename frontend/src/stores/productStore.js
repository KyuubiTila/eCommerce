import axios from 'axios';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProducts = create(
  persist(
    (set) => ({
      products: [],
      fetchProducts: async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/product');

          const { data } = response;

          set({ products: data.data });
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },

      fetchSingleProduct: async (id) => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/product/${id}`
          );

          const { data } = response;

          set({ products: data.data });
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
    }),
    { name: 'productStorage' }
  )
);
