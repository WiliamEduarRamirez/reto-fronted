<template>
   <v-container>
      <v-row>
         <v-col>
            <div :style="{ color: '#00577D' }" class="text-h4 text-center">
               <strong> ¡Hola Wiliam! </strong>
            </div>
         </v-col>
         <v-col cols="12">
            <list-categories></list-categories>
         </v-col>
         <v-col cols="12">
            <list-products></list-products>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ListCategories from '@/components/products/containers/ListCategories';
import ListProducts from '@/components/products/containers/ListProducts';

export default {
   name: 'Products',
   components: { ListProducts, ListCategories },
   computed: {
      ...mapGetters('products', ['products']),
   },
   methods: {
      ...mapActions('products', ['loadProducts', 'loadCategories']),
   },
   created() {
      this.loadProducts();
      this.loadCategories();
   },
};
</script>

<style scoped></style>
