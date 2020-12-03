<template>
  <v-app light>
    <v-fade-transition>
      <!-- <loading-screen /> -->
      <loading-screen v-show="loading" />
    </v-fade-transition>
    <v-app-bar clipped-right clipped-left dense app color="grey lighten-4" flat>
      <v-app-bar-nav-icon v-show="!isMobile" @click="mini = !mini" />
      <v-toolbar-title class="text-uppercase pl-0">
        {{ $store.getters.firstname }} {{ $store.getters.lastname }}
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          class="text-none"
          :href="'mailto:' + $store.getters.email"
          :icon="isMobile"
          text
        >
          <v-icon color="#1F1F1F" class="mr-md-1">mdi-email-outline</v-icon>
          <span v-show="!isMobile">{{ $store.getters.email }}</span>
        </v-btn>
        <v-btn text class="text-none">
          <v-icon color="#1F1F1F" class="mr-md-1">
            mdi-message-text-outline
          </v-icon>
          <span v-show="!isMobile">Leave a message</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-show="!isMobile"
      v-model="left"
      clipped
      :permanent="$vuetify.breakpoint.mdAndUp"
      fixed
      class="grey lighten-4"
      :mini-variant="mini"
      app
    >
      <div class="full-width fill-height d-flex justify-center flex-column">
        <v-list>
          <v-list-item
            v-for="route in routes"
            :key="route.name"
            :to="route.path"
            exact
            two-line
            class="px-2"
          >
            <v-list-item-avatar>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-title> {{ route.name }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-main class="grey lighten-4">
      <v-container fluid class="fill-height">
        <nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer
      v-show="!isMobile"
      :permanent="$vuetify.breakpoint.mdAndUp"
      app
      mini-variant
      right
      clipped
      color="grey lighten-4"
    >
      <div class="full-width fill-height d-flex justify-center flex-column">
        <v-list>
          <v-list-item
            v-for="{ icon, name, link } in $store.getters.social"
            :key="name"
            :class="['px-2']"
            :href="link"
            target="_blank"
          >
            <v-list-item-avatar>
              <v-icon> {{ icon }} </v-icon>
            </v-list-item-avatar>
            <v-list-item-title> {{ name }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",

  data() {
    return {
      left: null,
      mini: true,
      loading: false,
      transition: "slide-y-transition",
      routes: [
        {
          name: "About Me",
          icon: "mdi-account-outline",
          path: "/",
        },
        {
          name: "My Portfolio",
          icon: "mdi-briefcase-outline",
          path: "/portfolio",
        },
        {
          name: "Find Me",
          icon: "mdi-map-marker-outline",
          path: "/findme",
        },
      ],
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
  created() {
    this.loading = true
    this.$nuxt.$on("push", this.pushRoute)
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1300)
  },
  methods: {
    pushRoute(target) {
      const from = this.$nuxt.$route.path
      if (target === "/") {
        this.transition = "slide-y-reverse-transition"
      } else {
        const fromIndex = this.routes.findIndex(({ path }) => path === from)
        const targetIndex = this.routes.findIndex(({ path }) => path === target)
        if (fromIndex > targetIndex) {
          this.transition = "slide-y-reverse-transition"
        } else {
          this.transition = "slide-y-transition"
        }
      }
      setTimeout(() => {
        this.$router.push(target)
      }, 100)
    },
  },
}
</script>
<style>
.v-navigation-drawer__border {
  display: none !important;
}
</style>
