<template>
  <v-app>
    <navigation-bar @goto="goTo" />
    <v-content class="grey lighten-4">
      <Home @goto="goTo" id="home" />
      <About id="about" />
      <portfolio id="portfolio" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "./components/Navigation.vue";
import Home from "./sections/Home.vue";
import About from "./sections/About.vue";
import Portfolio from "./sections/Portfolio.vue";
export default Vue.extend({
  name: "App",
  components: { NavigationBar, Home, About, Portfolio },

  methods: {
    goTo: function(id: string) {
      (this as any).$vuetify.goTo(id, {
        duration: 500,
        easing: "easeInQuart",
        offset: 70
      });
    },
    intersected: function(entries: [any], observer: object) {
      console.log(entries[0].intersectionRatio, observer);
    }
  }
});
</script>
<style>
.v-application {
  font-family: "Comfortaa", cursive !important;
}
</style>
