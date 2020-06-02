<template>
  <v-container fluid class="features">
    <v-container class="pb-10">
      <h1
        style=" font-family: 'Comfortaa', cursive !important;"
        class="mb-4 mt-10 text-center featurestxt--text"
        :class="[isMobile ? 'display-1' : 'display-2']"
      >{{tagline}}</h1>
      <v-row>
        <v-col v-for="(item, i) in features" :key="i" cols="6" sm="3">
          <features-card :icon="item.icon" :text="item.text" :title="item.title" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FeaturesCard from "@/components/FeaturesCard.vue";
@Component({ components: { FeaturesCard } })
export default class Features extends Vue {
  tagline = "Pixels with purpose.";

  get features() {
    return this.$store.getters.features;
  }
  get isMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }
  //   methods
  textAnimate(e: Event) {}
}
</script>
