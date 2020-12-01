<template>
  <v-container class="fill-height">
    <v-row align="center">
      <v-col class="page-heading" cols="12" md="6">
        <h1 class="firstname">{{ $store.getters.firstname }}</h1>
        <h1 class="lastname">{{ $store.getters.lastname }}.</h1>
      </v-col>
      <v-col class="page-conent" cols="12" md="6">
        <v-scroll-y-reverse-transition>
          <span class="d-inline-block black px-3">
            <h1 class="white--text">{{ $store.getters.designation }}</h1>
          </span>
        </v-scroll-y-reverse-transition>
        <v-scroll-y-reverse-transition>
          <p>{{ $store.getters.aboutme }}</p>
        </v-scroll-y-reverse-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
<style>
.page-heading {
  text-align: left;
  font-family: "Catamaran", sans-serif !important;
  text-transform: uppercase;
  line-height: 1.2;
  font-size: 2rem;
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
</style>
