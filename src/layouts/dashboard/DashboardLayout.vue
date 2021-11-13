<template>
   <v-app id="inspire">
      <navbar></navbar>
      <v-main>
         <v-container>
            <v-fade-transition mode="out-in">
               <router-view />
            </v-fade-transition>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
import Navbar from '@/layouts/dashboard/navbar/Navbar';
export default {
   name: 'DashboardLayout',
   components: { Navbar },
};
</script>

<style scoped></style>
