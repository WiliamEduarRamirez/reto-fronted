<template>
   <div>
      <div
         v-if="categoriesMode"
         :style="{ color: $vuetify.theme.themes.light.primary }"
         class="text-h4 mb-3"
      >
         <strong> {{ categoriesMode }} </strong>
         <v-btn @click="reset" color="primary"> Limpiar </v-btn>
      </div>
      <custom-progress-circular
         style="margin-top: 150px"
         v-if="loadingProducts"
      ></custom-progress-circular>
      <v-row v-else>
         <!--         <div :key="index" v-for="(tempProduct, index) in products">
            <p>{{ tempProduct }}</p>
         </div>-->
         <v-col cols="12" sm="6" md="3" :key="index" v-for="(tempProduct, index) in products">
            <v-card elevation="4" class="mx-auto my-12 rounded-xl" max-width="374">
               <v-img contain height="200" :src="tempProduct.image"></v-img>

               <v-card-title>{{ tempProduct.title }}</v-card-title>

               <v-card-text>
                  <v-row align="center" class="mx-0">
                     <v-rating
                        :value="tempProduct.rating.rate"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        class="mt-n1"
                     ></v-rating>
                     <div class="grey--text ms-4">
                        {{ `${tempProduct.rating.rate} (${tempProduct.rating.count})` }}
                     </div>
                  </v-row>
                  <p class="my-4"><strong>Categoria:</strong> {{ tempProduct.category }}</p>
                  <div class="grey--text">Plaza vea</div>
                  <div class="my-3 text-subtitle-1">S/ {{ tempProduct.price }}</div>
                  <div>
                     {{ tempProduct.description }}
                  </div>
               </v-card-text>

               <v-card-actions>
                  <div style="width: 100%" class="text-center">
                     <v-btn color="primary" rounded> Agregar </v-btn>
                  </div>
               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
   </div>
</template>

<script>
import CustomProgressCircular from '@/common/custom-progress-circular/CustomProgressCircular';
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
   name: 'ListProducts',
   components: { CustomProgressCircular },
   computed: {
      ...mapGetters('products', ['products', 'loadingProducts', 'categoriesMode']),
   },
   methods: {
      ...mapActions('products', ['loadProducts']),
      ...mapMutations('products', ['setModeCategories']),
      reset() {
         this.setModeCategories(null);
         this.loadProducts();
      },
   },
};
</script>

<style scoped></style>
