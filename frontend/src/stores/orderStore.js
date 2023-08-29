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
          await axios.post('http://localhost:3001/api/order/addOrder', data);
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
    }),
    { name: 'orderStorage' }
  )
);
