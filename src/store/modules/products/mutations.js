export default {
   setLoadingProducts: (state, payload) => {
      state.loadingProducts = payload;
   },
   setLoadingCategories: (state, payload) => {
      state.loadingCategories = payload;
   },
   setProducts: (state, payload) => {
      state.products = payload;
   },
   setCategories: (state, payload) => {
      state.categories = payload;
   },
   setModeCategories: (state, payload) => {
      state.categoriesMode = payload;
   },
};
