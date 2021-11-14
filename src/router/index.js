import Vue from 'vue';
import VueRouter from 'vue-router';
import productsRouters from '@/router/modules/products-routers';
import store from '@/store/index';

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
   {
      path: '/products',
      name: '',
      component: () => import('@/layouts/dashboard/DashboardLayout'),
      children: [...productsRouters],
   },
   {
      path: '/:notFound(.*)',
      component: () => import('@/layouts/errors/NotFound'),
      meta: {
         requiresAuth: false,
      },
   },
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
});

router.beforeEach((to, from, next) => {
   store.dispatch('auth/tryLogin');
   const { requiresAuth } = to.meta;
   const currentUser = store.getters['auth/isAuthenticate'];
   if (!currentUser && requiresAuth) {
      return next({ path: '/' });
   }
   if (to.name === 'login') {
      if (currentUser) {
         next({ path: '/products' });
      }
   }
   next();
});

export default router;
