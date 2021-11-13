<template>
   <v-container class="ma-2">
      <v-row>
         <list-categories></list-categories>
      </v-row>
      <v-row>
         <list-products></list-products>
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
      /*console.log(this.products);*/
   },
};
</script>

<style scoped></style>
