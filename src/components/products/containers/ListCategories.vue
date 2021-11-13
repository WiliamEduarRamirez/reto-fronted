<template>
   <v-col>
      <custom-progress-circular v-if="loadingCategories"></custom-progress-circular>
      <div v-else>
         <div :key="index" v-for="(tempCategory, index) in categories">
            <p>{{ tempCategory }}</p>
         </div>
      </div>
   </v-col>
</template>

<script>
import CustomProgressCircular from '@/common/custom-progress-circular/CustomProgressCircular';
import { mapGetters } from 'vuex';
export default {
   name: 'ListCategories',
   components: { CustomProgressCircular },
   computed: {
      ...mapGetters('products', ['loadingCategories', 'categories']),
   },
};
</script>

<style scoped></style>
