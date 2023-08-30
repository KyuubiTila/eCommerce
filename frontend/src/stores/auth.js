import axios from 'axios';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuth = create(
  persist(
    (set) => ({
      user: [],
      register: async (data) => {
        // console.log(data);

        try {
          const user = await axios.post(
            'http://localhost:3001/api/auth/register',
            data
          );
          console.log(user);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      },
    }),
    { name: 'auth' }
  )
);
