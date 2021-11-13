import Vue from 'vue';
import VueRouter from 'vue-router';
import productsRouters from '@/router/modules/products-routers';

Vue.use(VueRouter);

const routes = [
   { path: '/', redirect: '/login' },
   {
      path: '/login',
      name: 'login',
      component: () => import('@/components/auth/Login'),
      meta: {
         requiresAuth: false,
         /* authorize: [],*/
      },
   },
   /*   {
      path: '/:notFound(.*)',
      component: () => import('../layouts/errors/NotFound'),
      meta: {
         requiresAuth: false,
         authorize: [],
      },
   },*/
   {
      path: '/products',
      name: '',
      component: () => import('@/layouts/dashboard/DashboardLayout'),
      children: [...productsRouters],
   },
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
});

export default router;
