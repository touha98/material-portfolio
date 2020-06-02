<template>
  <v-footer dark class="pt-12" padless>
    <v-card class="header transparent" flat tile width="100%">
      <v-divider></v-divider>
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
      <v-card-text class="default--text text-center subtitle-1">
        View source code on
        <a href="https://github.com/touha98/material-portfolio">GitHub</a>
        .
        <br />
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
