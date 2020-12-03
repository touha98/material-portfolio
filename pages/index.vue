<template>
  <v-container class="fill-height">
    <v-row align="center">
      <v-col
        :style="{ fontSize: isMobile ? '2rem' : '2.7rem' }"
        class="page-heading pl-md-6"
        cols="12"
        md="6"
      >
        <h1 class="firstname">{{ $store.getters.firstname }}</h1>
        <h1 class="lastname">{{ $store.getters.lastname }}.</h1>
      </v-col>
      <v-col class="page-conent" cols="12" md="6">
        <span class="d-inline-block black px-3">
          <h1 class="white--text">
            {{ $store.getters.designation }}
          </h1>
        </span>
        <p>{{ $store.getters.aboutme }}</p>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn elevation="0" large class="text-center">
          <span class="d-block">
            <v-icon class="bounce">mdi-arrow-down</v-icon>
            <span class="d-block"> view works </span>
          </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Homepage",
  transition: {
    name: "scroll-y-reverse-transition",
    mode: "out-in",
  },
  data: () => ({}),

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly
    },
  },

  head: {
    title: "About Me",
    meta: [
      {
        hid: "image",
        property: "og:image",
        content: "/avatar.jpg",
      },
    ],
  },
}
</script>

<style>
.page-heading {
  text-align: left;
  font-family: "Catamaran", sans-serif !important;
  text-transform: uppercase;
  line-height: 1;
}
.page-heading > .firstname {
  font-weight: 700;
}
.page-heading > .lastname {
  font-weight: 900;
}
.page-conent h1 {
  font-family: "Satisfy", cursive;
  color: white;
  font-weight: normal;
}
.page-conent p {
  margin-top: 1rem;
  font-size: 1.15rem;
}
.call-to-action {
  font-family: "Satisfy", cursive !important;
  font-size: 24px !important;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
