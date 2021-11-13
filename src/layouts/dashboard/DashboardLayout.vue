<template>
   <v-app id="inspire">
      <v-app-bar app color="white">
         <v-container class="py-0 fill-height">
            <v-avatar class="mr-2" color="grey darken-1" size="32"></v-avatar>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-responsive max-width="230">
               <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
            </v-responsive>
         </v-container>
      </v-app-bar>
      <v-main class="grey lighten-3">
         <v-container fluid>
            <v-fade-transition mode="out-in">
               <router-view />
            </v-fade-transition>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
   name: 'DashboardLayout',
};
</script>

<style scoped></style>
