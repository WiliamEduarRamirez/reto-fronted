import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/auth/index';
import productsModule from './modules/products/index';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {},
   mutations: {},
   actions: {},
   modules: {
      auth: authModule,
      products: productsModule,
   },
});
