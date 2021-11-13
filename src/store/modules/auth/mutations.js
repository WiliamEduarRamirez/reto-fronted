export default {
   setUser: (state, { user, dni }) => {
      state.user = user;
      state.dni = dni;
   },
   setInitialLoading: (state, payload) => {
      state.initialLoading = payload;
   },
};
