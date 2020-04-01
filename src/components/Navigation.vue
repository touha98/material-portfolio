<template>
  <v-app-bar
    class="header"
    :elevation="drawer ? 0 : 3"
    dark
    style="z-index:2;"
    inverted-scroll
    dense
    app
  >
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-expand-transition>
      <v-list
        class="mobileMenu py-0 header"
        v-if="drawer && isMobile"
        style="border-radius: 0 0 4px 4px;"
        elevation="1"
        dense
      >
        <v-list-item
          elevation="0"
          tile
          v-for="(item, i) in menuItems"
          :key="i"
          @click="goTo(item.route)"
        >
          <v-list-item-title
            class="dark--text"
            v-text="item.title"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-expand-transition>

    <v-toolbar-items v-if="!isMobile" class="mx-auto">
      <v-btn
        class="dark--text transparent elevation-0"
        @click="goTo(item.route)"
        v-for="(item, i) in menuItems"
        :key="i"
        >{{ item.title }}</v-btn
      >
    </v-toolbar-items>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navigation",
  data: () => ({
    drawer: false,
    menuItems: [
      { title: "Home", route: "#home" },
      { title: "About", route: "#about" },
      { title: "Portfolio", route: "#portfolio" },
      { title: "Blog", route: "#blog" },
      { title: "Contact", route: "#contact" }
    ]
  }),

  computed: {
    isMobile: function() {
      return (this as any).$vuetify.breakpoint.xsOnly;
    }
  },
  methods: {
    goTo: function(id: string) {
      this.$emit("goto", id);
      this.drawer = false;
    }
  }
});
</script>
<style scoped>
.header {
  background-color: rgba(29, 29, 29, 0.7) !important;
}
.mobileMenu {
  position: absolute !important;
  top: 48px;
  left: 0;
  right: 0;
}
</style>
