<template>
  <v-app>
    <img src="@/assets/images/profile.jpg" class="d-none" />
    <navigation-bar @goto="goTo" />
    <v-content class="background">
      <Home @goto="goTo" id="home" />
      <About id="about" />
      <Skills />
      <Features id="features" />
      <portfolio id="portfolio" />
      <!-- <blog id="blog" /> -->
      <contact id="contact" />
      <footer-section />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "./components/NavBar.vue";
import Home from "./sections/Home.vue";
import About from "./sections/About.vue";
import Features from "./sections/Features.vue";
import Skills from "./sections/Skills.vue";
import Portfolio from "./sections/Portfolio.vue";
// import Blog from "./sections/Blog.vue";
import Contact from "./sections/Contact.vue";
import FooterSection from "./components/Footer.vue";
export default Vue.extend({
  name: "App",
  components: {
    NavigationBar,
    Home,
    Skills,
    Features,
    About,
    Portfolio,
    // Blog,
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
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.headlines {
  color: #fff !important;
  text-shadow: 0px 0px 10px #1d2a36;
}
</style>
