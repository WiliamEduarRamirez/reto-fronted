<template>
   <v-app-bar height="70" app color="white" flat>
      <v-container class="py-0 fill-height">
         <v-btn class="mt-4 mr-2" color="primary">
            <v-icon>mdi-menu</v-icon>
         </v-btn>
         <v-img
            :src="require('@/assets/images/plaza-vea.png')"
            :max-width="$vuetify.breakpoint.xs ? '150' : '180'"
         ></v-img>

         <v-spacer></v-spacer>
      </v-container>
      <div class="d-flex flex-row">
         <strong v-if="!$vuetify.breakpoint.xs" class="mt-2"> {{ user }} </strong>
         <v-menu
            bottom
            left
            min-width="150"
            offset-y
            origin="top right"
            transition="scale-transition"
         >
            <template v-slot:activator="{ attrs, on }">
               <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
                  <v-icon>mdi-account</v-icon>
               </v-btn>
            </template>

            <v-list>
               <div v-if="$vuetify.breakpoint.xs">
                  <v-list-item>
                     <v-list-item-title>
                        <strong> {{ user }} </strong>
                     </v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
               </div>
               <v-list-item @click="logout">
                  <v-list-item-title><v-icon>mdi-logout</v-icon> Salir </v-list-item-title>
               </v-list-item>
            </v-list>
         </v-menu>
      </div>
   </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
   name: 'Navbar',
   computed: {
      ...mapGetters('auth', ['user']),
   },
   methods: {
      ...mapActions('auth', ['logout']),
   },
};
</script>

<style scoped></style>
