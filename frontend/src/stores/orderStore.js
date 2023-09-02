import axios from 'axios';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const savedOrders = () => {
  const orders = localStorage.getItem('cartItems');

  if (!orders) {
    return [];
  }

  return JSON.parse(orders);
};

export const useOrders = create(
  persist(
    (set) => ({
      orders: savedOrders(),
      addOrder: async (data) => {
        try {
          const product = await axios.post(
            'http://localhost:3001/api/order',
            data
          );

          console.log(product);

          set((state) => ({
            orders: [...state.orders, product.data],
          }));
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      },

      deleteOrder: async (id) => {
        try {
          await axios.delete(`http://localhost:3001/api/order/${id}`, {
            headers: {
              accessToken: localStorage.getItem('accessToken'),
            },
          });

          set((state) => ({
            orders: state.orders.filter((element) => {
              return element.id !== id;
            }),
          }));
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
    }),
    { name: 'orderStorage' }
  )
);
