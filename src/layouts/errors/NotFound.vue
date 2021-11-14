<template>
   <v-app>
      <v-container>
         <v-row>
            <v-col>
               <div class="text-center">
                  <h1>PÁGINA NO ENCONTRADA</h1>
               </div>
               <div class="text-center">
                  <h3>404</h3>
               </div>
               <div class="text-center">
                  <v-btn @click="onBack" color="primary">Regresar</v-btn>
               </div>
            </v-col>
         </v-row>
      </v-container>
   </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   name: 'NotFound',
   computed: {
      ...mapGetters('auth', ['isAuthenticate']),
   },
   methods: {
      async onBack() {
         if (this.isAuthenticate) {
            await this.$router.push({ path: '/products' });
         } else {
            await this.$router.push({ path: '/login' });
         }
      },
   },
};
</script>

<style scoped></style>
