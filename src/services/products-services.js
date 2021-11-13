import request from '@/api/api';

const productsServices = {
   list: request.get('/products'),
   listCategories: request.get('/products/categories'),
};

export default productsServices;
