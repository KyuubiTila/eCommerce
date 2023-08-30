import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuth = create(
  persist(
    (set) => ({
      user: [],
      loggedIn: false,
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

      userDetails: async () => {
        try {
          const details = await axios.get(
            'http://localhost:3001/api/auth/verify/authToken',
            {
              headers: {
                accessToken: localStorage.getItem('accessToken'),
              },
            }
          );

          console.log(details);

          set({ user: details.data.name });
          set({ loggedIn: true });
        } catch (error) {
          console.error('Error logging in:', error);
        }
      },

      logOut: () => {
        set({ user: [] });
        set({ loggedIn: false });
      },
    }),
    { name: 'auth' }
  )
);
