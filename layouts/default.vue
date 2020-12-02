<template>
  <v-app light>
    <v-fade-transition>
      <!-- <loading-screen /> -->
      <loading-screen v-show="loading" />
    </v-fade-transition>
    <v-app-bar clipped-left clipped-right dense app color="transparent" flat>
      <v-toolbar-title class="text-uppercase">
        {{ $store.getters.firstname }} {{ $store.getters.lastname }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn class="text-none" :href="'mailto:' + $store.getters.email" text>
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
      <div class="full-width fill-height d-flex justify-center flex-column">
        <v-list>
          <v-list-item
            v-for="{ icon, name, link } in $store.getters.social"
            :key="name"
            :class="['px-2']"
            :href="link"
          >
            <v-list-item-avatar>
              <v-icon> {{ icon }} </v-icon>
            </v-list-item-avatar>
            <v-list-item-title> {{ name }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
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
      loading: false,
    }
  },
  computed: {
    isMoblie() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
  created() {
    this.loading = true
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1800)
  },
}
</script>
