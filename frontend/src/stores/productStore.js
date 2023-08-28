import axios from 'axios';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProducts = create(
  persist(
    (set) => ({
      products: [],
      singleProduct: [],
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

          set({ singleProduct: data.data });
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },

      addProduct: async (data) => {
        console.log(data);

        try {
          await axios.post(
            'http://localhost:3001/api/product/addproduct',
            data
          );

          // on execution it should redirect ie navigate to the showProduct page
        } catch (error) {
          alert(error.response.data.error);
        }
      },
    }),
    { name: 'productStorage' }
  )
);
