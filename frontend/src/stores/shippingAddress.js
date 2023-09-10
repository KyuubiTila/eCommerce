import axios from 'axios';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const shippingAddress = create(
  persist(
    (set) => ({
      address: [],
      fetchAddress: async () => {
        try {
          const addressDetails = await axios.get(
            'http://localhost:3001/api/ShippingAddress',
            {
              headers: {
                accessToken: localStorage.getItem('accessToken'),
              },
            }
          );

          set({ address: addressDetails.data });
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
    }),
    { name: 'shippingAddress' }
  )
);
