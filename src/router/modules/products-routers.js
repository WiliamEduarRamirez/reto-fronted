const productsRouters = [
   {
      path: '',
      component: () => import('@/components/products/Products'),
      name: 'products',
      meta: {
         requiresAuth: true,
         /* authorize: [role.medic, role.supervisor],*/
      },
   },
];
export default productsRouters;
