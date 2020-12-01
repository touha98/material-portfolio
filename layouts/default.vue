<template>
  <v-app light>
    <v-app-bar dense app color="transparent" flat>
      <v-toolbar-title class="text-uppercase">
        {{ $store.getters.firstname }} {{ $store.getters.lastname }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn class="text-none" href="mailto:" text>
        {{ $store.getters.email }}
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="right"
      clipped
      class="grey lighten-4"
      app
      mini-variant
    ></v-navigation-drawer>
    <v-main
      class="grey lighten-4"
      :style="{ padding: isMoblie ? '0' : '50px 0' }"
    >
      <v-container fluid class="fill-height elevation-1 white">
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer app mini-variant right clipped color="grey lighten-4">
    </v-navigation-drawer>
    <v-footer app>
      <v-btn class="ml-6 text-none" text>
        scroll down
        <v-icon>mdi-arrow-down</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn class="mr-6 text-none" text>
        scroll up
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      right: null,
    }
  },
  computed: {
    isMoblie() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>
