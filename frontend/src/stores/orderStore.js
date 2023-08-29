import axios from 'axios';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useOrders = create(
  persist(
    (set) => ({
      orders: [],
      addOrder: async (data) => {
        console.log(data);

        try {
          const product = await axios.post(
            'http://localhost:3001/api/order/addOrder',
            data
          );
          console.log(product);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      },

      fetchOrder: async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/order');

          const { data } = response;

          set({ orders: data });
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },

      deleteOrder: async (id) => {
        try {
          const result = await axios.delete(
            `http://localhost:3001/api/order/${id}`
          );
          console.log(result);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
    }),
    { name: 'orderStorage' }
  )
);
