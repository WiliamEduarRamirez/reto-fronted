<template>
   <v-col>
      <custom-progress-circular v-if="loadingProducts"></custom-progress-circular>
      <div v-else>
         <div :key="index" v-for="(tempProduct, index) in products">
            <p>{{ tempProduct }}</p>
         </div>
      </div>
   </v-col>
</template>

<script>
import CustomProgressCircular from '@/common/custom-progress-circular/CustomProgressCircular';
import { mapGetters } from 'vuex';
export default {
   name: 'ListProducts',
   components: { CustomProgressCircular },
   computed: {
      ...mapGetters('products', ['products', 'loadingProducts']),
   },
};
</script>

<style scoped></style>
