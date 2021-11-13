<template>
   <v-app id="inspire">
      <v-container>
         <v-row>
            <v-col cols="12" class="text-center">
               <div class="mt-7">
                  <div
                     :style="{ color: $vuetify.theme.themes.light.primary }"
                     class="text-h5 text-uppercase"
                  >
                     <strong> aprovecha los mejores precios </strong>
                  </div>
                  <div
                     :style="{ color: $vuetify.theme.themes.light.primary }"
                     class="text-h5 text-uppercase"
                  >
                     que tenemos para ti
                  </div>
               </div>
            </v-col>
            <v-col cols="12" class="d-flex mt-5 justify-center">
               <v-card style="border-radius: 25px" width="500" elevation="4">
                  <v-form ref="form" v-model="valid" lazy-validation>
                     <v-container>
                        <v-row>
                           <v-col cols="12" class="text-center">
                              <div
                                 :style="{ color: $vuetify.theme.themes.light.primary }"
                                 class="text-h5 text-uppercase"
                              >
                                 <strong> ingresa tu dni </strong>
                              </div>
                              <div
                                 :style="{ color: $vuetify.theme.themes.light.primary }"
                                 class="text-h6 text-uppercase"
                              >
                                 y obten descuentos exclusivos
                              </div>
                           </v-col>
                           <v-col cols="12">
                              <v-text-field
                                 outlined
                                 :disabled="initialLoading"
                                 placeholder="Ejemplo: 73130183"
                                 label="Dni"
                                 v-model="form.dni"
                                 @keypress="onlyNumber($event, form.dni, 8)"
                                 :rules="rules.rulesDni"
                                 :counter="8"
                              ></v-text-field>
                           </v-col>
                           <v-col class="text-center mt-n8" cols="12">
                              <v-btn
                                 :loading="initialLoading"
                                 :disabled="!valid"
                                 @click="signIn"
                                 rounded
                                 color="primary"
                              >
                                 Ingresar
                              </v-btn>
                           </v-col>
                        </v-row>
                     </v-container>
                  </v-form>
               </v-card>
            </v-col>
            <v-col cols="12">
               <div class="d-flex flex-column mt-2 align-center">
                  <v-img
                     class="d-flex justify-center"
                     :src="require('@/assets/images/Plaza_Vea_2001.png')"
                     :aspect-ratio="16 / 9"
                     width="400"
                  />
               </div>
            </v-col>
         </v-row>
      </v-container>
   </v-app>
</template>

<script>
import { REGEX_VALID_NUMBERS } from '@/constants/validations-config';
import { mapActions, mapGetters } from 'vuex';

const defaultForm = {
   dni: null,
};
export default {
   name: 'Login',
   data: () => ({
      valid: true,
      form: { ...defaultForm },
      rules: {
         rulesDni: [
            (v) => !!v || 'Este campo es requerido',
            (v) => REGEX_VALID_NUMBERS.test(v) || 'Este campo solo acepta números',
            (v) => (v && v.length >= 8) || 'DNI debe tener 8 caracteres',
            (v) => (v && v.length <= 8) || 'DNI debe tener 8 caracteres',
         ],
      },
   }),
   computed: {
      ...mapGetters('auth', ['initialLoading']),
   },
   methods: {
      ...mapActions('auth', ['login']),
      async signIn() {
         if (!this.$refs.form.validate()) return;
         await this.login(this.form);
      },
   },
};
</script>

<style scoped>
/*::v-deep .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
   background: rgba(0, 0, 0, 0.06);
}*/
::v-deep .v-text-field--outlined > .v-input__control > .v-input__slot {
   background: rgba(0, 0, 0, 0.06);
}
</style>
