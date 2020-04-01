<template>
  <v-container
    :id="id"
    style="height: 100vh"
    :class="['pa-0', 'mb-0', 'homapageContainer']"
    fluid
  >
    <v-row justify="center" align-content="center" class="fill-height">
      <v-card
        width="100%"
        transition="fade-transition"
        elevation="0"
        class="transparent text-center"
      >
        <h1
          style="font-family: 'Comfortaa', cursive !important;"
          :class="[isMobile ? 'headline' : 'display-2', 'dark--text']"
        >
          {{ personal.title }}
        </h1>
        <h1
          id="subTitle"
          style="font-family: 'Comfortaa', cursive !important;"
          :class="[isMobile ? 'subtitle-1' : 'display-1', 'dark--text']"
        ></h1>
        <v-img
          v-if="isMobile"
          class="mx-auto my-4 ProfileImg"
          width="150"
          height="150"
          style="border-radius:50%;"
          aspect-ratio="1"
          :src="personal.photoURL"
        ></v-img>
        <div v-else class="imagePlaceholder">
          <v-img
            :class="['mx-auto', 'ProfileImg']"
            width="197"
            height="197"
            :src="personal.photoURL"
          ></v-img>
        </div>
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
  name: "Home",
  props: {
    id: String
  },
  data: () => ({
    loaded: false
  }),
  computed: {
    ...mapGetters(["personal"]),
    isMobile: function(): boolean {
      return this.$vuetify.breakpoint.xsOnly;
    }
  },
  methods: {
    setHTML: function(val: string) {
      const el = document.getElementById("subTitle");
      if (val && el) el.innerHTML = val;
    }
  },
  watch: {
    personal: function(val) {
      this.setHTML(val.subtitle);
    }
  },
  mounted() {
    this.setHTML(this.personal.subtitle);
  }
});
</script>

<style scoped>
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
}
.ProfileImg {
  background: #fff !important;
  border: 3px solid #fff !important;
  border-radius: 50%;
}
</style>
