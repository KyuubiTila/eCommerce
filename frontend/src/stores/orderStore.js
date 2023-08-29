import axios from 'axios';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useOrders = create(
  persist(
    (set) => ({
      orders: [],
      addOrder: async (data) => {
        // console.log(data);

        try {
          const product = await axios.post(
            'http://localhost:3001/api/order/addOrder',
            data
          );
          // console.log(product.data);

          // Get existing cart items from local storage or initialize an empty array
          const existingCartItems =
            JSON.parse(localStorage.getItem('cartItems')) || [];

          // Add the new cart item to the existing items
          existingCartItems.push(product.data);

          // Store the updated cart items array back in local storage
          localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      },

      fetchOrder: async () => {
        try {
          // const response = await axios.get('http://localhost:3001/api/order');
          // const { data } = response;
          // console.log(response);
          const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

          set({ orders: cartItems });
          // console.log(cartItems);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },

      deleteOrder: async (id) => {
        try {
          await axios.delete(`http://localhost:3001/api/order/${id}`);
          // console.log(result);

          const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

          // console.log(cartItems);

          const newComments = cartItems.filter((element) => {
            return element.id !== id;
          });

          localStorage.setItem('cartItems', JSON.stringify(newComments));

          set({ orders: newComments });
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
    }),
    { name: 'orderStorage' }
  )
);
