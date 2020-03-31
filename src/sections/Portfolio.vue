<template>
  <v-container :id="id">
    <v-card elevation="0" tile class="full-width transparent">
      <v-card-title
        style=" font-family: 'Comfortaa', cursive !important;"
        class="display-2 justify-center"
      >
        Projects
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "portfolio",
  props: {
    id: String
  },
  data: () => ({})
});
</script>

<style></style>
