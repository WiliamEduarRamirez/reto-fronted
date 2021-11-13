import { setUserStorage } from '@/local-storage/setters';
import { getUserStorage } from '@/local-storage/getters';
import router from '@/router';
import { removeUserStorage } from '@/local-storage/removes';
import { sleep } from '@/functions/sleep';

export default {
   async login({ commit }, payload) {
      try {
         commit('setInitialLoading', true);
         await sleep(1500);
         const { dni } = payload;
         const data = {
            dni,
            user: 'Wiliam',
         };
         setUserStorage(data);
         commit('setUser', data);
         commit('setInitialLoading', false);
         router.push({ path: '/products' });
      } catch (e) {
         console.log(e);
      }
   },
   tryLogin({ commit }) {
      const user = getUserStorage();
      if (user) {
         commit('setUser', user);
      }
   },
   logout({ commit }) {
      const data = {
         dni: null,
         user: null,
      };
      removeUserStorage();
      commit('setUser', data);
      router.push({ path: '/login' });
   },
};
