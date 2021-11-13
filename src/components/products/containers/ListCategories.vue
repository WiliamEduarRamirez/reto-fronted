<template>
   <div>
      <div :style="{ color: $vuetify.theme.themes.light.primary }" class="text-h4 mb-3">
         <strong> Categorías </strong>
      </div>
      <custom-progress-circular class="mt-15" v-if="loadingCategories"></custom-progress-circular>
      <v-row v-else>
         <v-col cols="12" sm="6" md="3" :key="index" v-for="(tempCategory, index) in categories">
            <v-card
               elevation="4"
               @click="() => onChangeCategory(tempCategory)"
               rounded
               max-width="450"
            >
               <v-img
                  :src="`https://picsum.photos/500/300?image=${index * 5 + 10}`"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="50px"
               >
                  <p style="width: auto" class="text-center text-uppercase">
                     <strong>
                        {{ tempCategory }}
                     </strong>
                  </p>
                  <!--                  <v-card-title> {{ tempCategory }}</v-card-title>-->
               </v-img>
            </v-card>
         </v-col>
      </v-row>
   </div>
</template>

<script>
import CustomProgressCircular from '@/common/custom-progress-circular/CustomProgressCircular';
import { mapActions, mapGetters } from 'vuex';
export default {
   name: 'ListCategories',
   components: { CustomProgressCircular },
   computed: {
      ...mapGetters('products', ['loadingCategories', 'categories']),
   },
   methods: {
      ...mapActions('products', ['listProductsForCategory']),
      async onChangeCategory(category) {
         await this.listProductsForCategory(category);
      },
   },
};
</script>

<style scoped></style>
