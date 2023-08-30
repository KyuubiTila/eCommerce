import axios from 'axios';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuth = create(
  persist(
    (set) => ({
      token: [],
      username: [],
      register: async (data) => {
        // console.log(data);

        try {
          const user = await axios.post(
            'http://localhost:3001/api/auth/register',
            data
          );
          console.log(user);
        } catch (error) {
          console.error('Error registering user:', error);
        }
      },

      loginUser: async (data) => {
        try {
          const loggedInUser = await axios.post(
            'http://localhost:3001/api/auth/login',
            data
          );

          localStorage.setItem('accessToken', loggedInUser.data.token);
          set({ token: loggedInUser.data.token });
          set({ username: data.name });
        } catch (error) {
          console.error('Error logging in:', error);
        }
      },
    }),
    { name: 'auth' }
  )
);
