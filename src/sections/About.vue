<template>
  <v-container style="flex-direction:column;" class="about justify-center pt-6" fluid>
    <v-row :id="id" justify="center" align-content="center">
      <v-card elevation="0" tile class="container transparent">
        <v-card-title
          style=" font-family: 'Comfortaa', cursive !important;"
          class="justify-center headlines"
          :class="[isMobile ? 'display-1' : 'display-2']"
        >About</v-card-title>
        <v-card-text class="px-0">
          <v-skeleton-loader v-if="!personal.aboutme" class="full-width" type="paragraph"></v-skeleton-loader>
          <v-card-text class="font-weight-regular abouttxt--text title">{{ personal.aboutme }}</v-card-text>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import firebase from "../firebaseConfig";
import { mapGetters } from "vuex";

const db = firebase.firestore();
export default Vue.extend({
  name: "About",
  props: {
    id: String
  },
  computed: {
    ...mapGetters(["personal"]),
    isMobile: function(): boolean {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
});
</script>
