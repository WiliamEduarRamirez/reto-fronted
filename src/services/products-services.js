import request from '@/api/api';

const productsServices = {
   list: () => request.get('/products'),
   listCategories: () => request.get('/products/categories'),
   listForCategory: (category) => request.get(`/products/categories/${category}`),
};

export default productsServices;
