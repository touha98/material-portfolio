<template>
  <v-footer class="mt-12" padless>
    <v-card class="header" flat tile width="100%">
      <v-card-text class="text-center">
        <v-btn
          target="_blank"
          :href="item.url"
          v-for="(item, i) in address.social_links"
          :key="i"
          class="dark--text"
          icon
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="dark--text text-center">
        <p class="text-center">
          View source code on <a href="http://www.mynameismosh.com/">GitHub</a>.
        </p>
        design inspiration came from the portfolio of
        <a href="http://findmatthew.com/">Matthew Williams</a> and
        <a href="http://www.mynameismosh.com/">Mosh Hamedani</a>.
        <br />
        made with vuetify material design and vuejs.
      </v-card-text>
      <v-card-text class="dark--text text-center"> </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text text-center subtitle-1">
        material portfolio Copyright (C) {{ new Date().getFullYear() }} Touha
        Zohair
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  computed: {
    ...mapGetters(["address"])
  }
})
export default class Footer extends Vue {}
</script>

<style>
.header {
  background-color: rgba(29, 29, 29, 0.7) !important;
}
</style>
