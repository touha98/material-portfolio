<template>
  <v-card elevation="0" tile class="full-width fill-height text-center transparent">
    <v-icon class="pt-6" color="featurestxt" size="80">{{ icon }}</v-icon>
    <v-card-title :class="['justify-center featurestxt--text', isMobile ? 'px-0' : '']">{{ title }}</v-card-title>
    <v-card-text :class="['justify-center featurestxt--text', isMobile ? 'px-1' : '']">{{ text }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FeaturesCard",
  props: {
    icon: String,
    title: String,
    text: String
  },
  computed: {
    isMobile: function(): boolean {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
});
</script>
