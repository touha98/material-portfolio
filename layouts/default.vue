<template>
  <v-app light>
    <v-fade-transition>
      <v-overlay v-if="expanded && isMobile" :z-index="10">
        <div
          style="width: 100vh; height: 100vh"
          @click="expanded = false"
        ></div>
      </v-overlay>
    </v-fade-transition>
    <v-fade-transition>
      <!-- <loading-screen /> -->
      <loading-screen v-show="loading" />
    </v-fade-transition>
    <v-app-bar
      :hide-on-scroll="isMobile"
      clipped-right
      clipped-left
      dense
      app
      color="grey lighten-4"
      flat
    >
      <v-btn
        v-show="!isMobile"
        :class="[mini ? '' : 'opened']"
        icon
        @click="mini = !mini"
      >
        <burger-menu-svg />
      </v-btn>

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
        <v-btn text class="text-none" @click="dialog = true">
          <v-icon color="#1F1F1F" class="mr-md-1">
            mdi-message-text-outline
          </v-icon>
          <span v-show="!isMobile">Leave a message</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-show="!isMobile"
      clipped
      :permanent="$vuetify.breakpoint.mdAndUp"
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

    <v-main
      class="grey lighten-4"
      :class="[loading ? 'hide-loading-overflow' : '']"
    >
      <v-dialog v-model="dialog" max-width="450px">
        <v-form data-netlify="true" name="contact" @submit="submitMessage">
          <v-card>
            <v-card-title class="mb-2">
              What's on your mind?
              <v-spacer />
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-text-field
                color="grey"
                label="Your Email"
                name="email"
                class="mb-2"
                outlined
                rounded
                hide-details
                autofocus
              ></v-text-field>
              <v-textarea
                label="Write your message"
                color="grey"
                name="message"
                outlined
                rounded
                hide-details
              ></v-textarea>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn type="submit" class="mb-4 px-5" outlined rounded large>
                submit
              </v-btn>
            </v-card-actions>
          </v-card>
          <input type="hidden" name="form-name" value="contact" />
        </v-form>
      </v-dialog>

      <v-container fluid class="fill-height">
        <div
          v-show="isMobile"
          :class="[expanded ? 'expanded' : '']"
          class="mobile-menu elevation-2 white"
        >
          <v-fade-transition>
            <v-list v-if="expanded" class="mx-auto mobile-menu-list-wrapper">
              <v-list-item
                v-for="route in routes"
                :key="route.name"
                :to="route.path"
                @click="expanded = false"
              >
                <v-list-item-title class="text-center">
                  {{ route.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-fade-transition>
        </div>
        <nuxt />
      </v-container>
      <button
        v-show="isMobile"
        class="menu-fab menu white"
        :class="[expanded ? 'opened' : 'elevation-2']"
        @click="expanded = !expanded"
      >
        <burger-menu-svg />
      </button>
    </v-main>
    <v-snackbar v-model="snackbar">
      Thanks for your message!
      <template v-slot:action="{ attrs }">
        <v-btn
          color="grey lighten-4"
          icon
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
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
      left: true,
      mini: true,
      snackbar: false,
      loading: false,
      expanded: false,
      dialog: false,
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
          name: "Tools I Use",
          icon: "mdi-hammer-screwdriver",
          path: "/tools",
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
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1300)
  },
  methods: {
    async submitMessage(e) {
      try {
        await e.preventDefault()
        this.dialog = false
        const formData = new FormData(e.target)
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
        this.snackbar = true
      } catch (error) {
        alert(error.message)
      }
    },
  },
}
</script>
<style>
.v-navigation-drawer__border {
  display: none !important;
}
.menu-fab {
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  border-radius: 50% 0 0 0;
  z-index: 80;
  transition: 0.3s box-shadow ease;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.mobile-menu {
  position: fixed;
  bottom: 0;
  right: 0;
  height: 300px;
  width: 250px;
  border-radius: 30px 0 0 0;
  display: flex;
  align-items: center;
  z-index: 77;
  transform: translate(200px, 250px);
  transition: 0.3s all ease;
}
.mobile-menu.expanded {
  transform: translate(0px, 0px);
}
.mobile-menu-list-wrapper {
  width: 100%;
}
.hide-loading-overflow {
  max-height: 100vh;
  overflow: hidden;
}
</style>
