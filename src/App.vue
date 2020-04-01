<template>
  <v-app>
    <navigation-bar @goto="goTo" />
    <v-content class="grey lighten-4">
      <Home @goto="goTo" id="home" />
      <About id="about" />
      <portfolio id="portfolio" />
      <blog id="blog" />
      <contact id="contact" />
      <footer-section />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "./components/Navigation.vue";
import Home from "./sections/Home.vue";
import About from "./sections/About.vue";
import Portfolio from "./sections/Portfolio.vue";
import Blog from "./sections/Blog.vue";
import Contact from "./sections/Contact.vue";
import FooterSection from "./components/Footer.vue";
export default Vue.extend({
  name: "App",
  components: {
    NavigationBar,
    Home,
    About,
    Portfolio,
    Blog,
    Contact,
    FooterSection
  },

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
  },
  created() {
    this.$store.dispatch("getData");
    console.log(this.$store.getters);
  }
});
</script>
<style>
.v-application {
  font-family: "Comfortaa", cursive !important;
}
</style>
