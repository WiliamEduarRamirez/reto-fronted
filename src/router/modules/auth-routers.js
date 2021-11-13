const authRouters = [
   {
      path: '/login',
      component: () => import('@/components/auth/Login'),
      name: 'login',
      meta: {
         requiresAuth: false,
         /* authorize: [role.medic, role.supervisor],*/
      },
   },
];
export default authRouters;
