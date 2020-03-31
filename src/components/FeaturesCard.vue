<template>
  <v-card tile class="full-width fill-height text-center">
    <v-icon class="pt-6 info--text" size="80">{{ icon }}</v-icon>
    <v-card-title :class="['justify-center', isMobile ? 'px-0' : '']">
      {{ title }}
    </v-card-title>
    <v-card-text :class="['justify-center', isMobile ? 'px-1' : '']">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Features",
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

<style></style>
