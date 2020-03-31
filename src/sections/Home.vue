<template>
  <v-container
    :id="id"
    style="height: 100vh"
    :class="['pa-0', 'mb-0', 'homapageContainer']"
    fluid
  >
    <template v-if="false">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </template>
    <v-row justify="center" align-content="center" class="fill-height">
      <v-card
        transition="fade-transition"
        elevation="0"
        class="transparent text-center"
      >
        <h1
          style="font-family: 'Comfortaa', cursive !important;"
          :class="[isMobile ? 'headline' : 'display-2', 'dark--text']"
        >
          Hi, my name is touha.
        </h1>
        <h1
          style="font-family: 'Comfortaa', cursive !important;"
          :class="[isMobile ? 'title' : 'display-1', 'dark--text']"
        >
          I am a <br v-if="isMobile" />
          <span class="secondary--text"> full-stack web developer</span>.
        </h1>
        <v-img
          v-if="isMobile"
          class="mx-auto my-4 ProfileImg"
          width="150"
          height="150"
          style="border-radius:50%;"
          aspect-ratio="1"
          :src="url"
        ></v-img>
        <div v-else class="imagePlaceholder">
          <v-img
            :class="['mx-auto', loaded ? 'ProfileImg' : '']"
            width="197"
            height="197"
            :src="url"
          ></v-img>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "../firebaseConfig";

const db = firebase.firestore();
export default Vue.extend({
  name: "Home",
  props: {
    id: String
  },
  data: () => ({
    loaded: false,
    url: String
  }),
  computed: {
    isMobile: function() {
      this as any;
      return (this as any).$vuetify.breakpoint.xsOnly;
    }
  },
  created() {}
});
</script>

<style scoped>
@import url("../assets/parallex_pixels.css");
.mainButton {
  border-width: 2px !important;
}
.homapageContainer {
  background: radial-gradient(ellipse at center, #1b2735 0%, #090a0f 100%);
  overflow: hidden !important;
}
.imagePlaceholder {
  background: url("../assets/images/img-bg2.png");
  background-repeat: no-repeat;
  background-position-x: center;
  height: 450px;
  padding: 130px 0;
  width: auto;
}
.ProfileImg {
  background: #fff !important;
  border: 3px solid #fff !important;
  border-radius: 50%;
}
</style>
