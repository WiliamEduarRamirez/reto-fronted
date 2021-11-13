import productsServices from '@/services/products-services';

export default {
   async loadProducts({ commit }) {
      commit('setLoadingProducts', true);
      try {
         const response = await productsServices.list();
         commit('setProducts', response);
      } catch (e) {
         console.log(e);
      } finally {
         commit('setLoadingProducts', false);
      }
   },
   async listProductsForCategory({ commit }, payload) {
      commit('setLoadingProducts', true);
      commit('setModeCategories', payload);
      try {
         const response = await productsServices.listForCategory(payload);
         commit('setProducts', response);
      } catch (e) {
         console.log(e);
      } finally {
         commit('setLoadingProducts', false);
      }
   },
   async loadCategories({ commit }) {
      commit('setLoadingCategories', true);
      try {
         const response = await productsServices.listCategories();
         commit('setCategories', response);
      } catch (e) {
         console.log(e);
      } finally {
         commit('setLoadingCategories', false);
      }
   },
};
