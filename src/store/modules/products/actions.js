import productsServices from '@/services/products-services';

export default {
   async loadProducts({ commit }) {
      commit('setLoadingProducts', true);
      try {
         const response = await productsServices.list();
         commit('setProducts', response);
         console.log(response);
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
         console.log(response);
      } catch (e) {
         console.log(e);
      } finally {
         commit('setLoadingCategories', false);
      }
   },
};
