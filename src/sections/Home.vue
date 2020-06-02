<template>
  <v-container :id="id" style="height: 100vh" :class="['pa-0', 'mb-0', 'homapageContainer']" fluid>
    <v-row justify="center" align-content="center" class="fill-height">
      <v-card width="100%" elevation="0" class="transparent text-center">
        <transition name="scroll-y-transition">
          <h1
            v-if="loaded"
            style="font-family: 'Comfortaa', cursive !important;"
            :class="[isMobile ? 'headline' : 'display-2', 'headlines', ]"
          >Hi, my name is touha.</h1>
        </transition>
        <transition name="scroll-y-reverse-transition">
          <h1
            v-if="loaded"
            id="subTitle"
            style="font-family: 'Comfortaa', cursive !important;"
            :class="[isMobile ? 'subtitle-1' : 'display-1', 'dark--text']"
          >
            I am a
            <span class="secondary--text">full-stack web developer</span>.
          </h1>
        </transition>
        <div
          v-if="loaded"
          :class="['imagePlaceholder', isMobile?'py-10':'includeBG']"
          :style="{
              height: isMobile?'200px':'450px'
            }"
        >
          <v-img
            :class="['mx-auto','ProfileImg']"
            aspect-ratio="1"
            :max-width="isMobile?'150px':'180px'"
            lazy-src="@/assets/images/profile-2.jpg"
            src="@/assets/images/profile-2.jpg"
          ></v-img>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import profile from "@/assets/profile";
import firebase from "@/firebaseConfig";
import { mapGetters } from "vuex";

const db = firebase.firestore();
export default Vue.extend({
  name: "Home",
  props: {
    id: String
  },
  data: () => ({
    loaded: 0
  }),
  computed: {
    ...mapGetters(["personal"]),
    isMobile: function(): boolean {
      return this.$vuetify.breakpoint.xsOnly;
    },
    profileURI: function(): string {
      return profile;
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
    this.loaded++;
    setTimeout(() => {
      this.loaded++;
    }, 500);
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
  padding: 145px 0;
}
.includeBG {
  background: url("../assets/images/img-bg2.png");
  background-repeat: no-repeat;
  background-position-x: center;
}
.ProfileImg {
  border: 4px solid #e1e1e1;
  border-radius: 50%;
}
</style>
