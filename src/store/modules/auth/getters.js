export default {
   user: (state) => state.user,
   initialLoading: (state) => state.initialLoading,
   isAuthenticate: (state) => !!state.user && !!state.dni,
};
