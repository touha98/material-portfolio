<template>
  <v-container class="my-5" :id="id">
    <h1
      style=" font-family: 'Comfortaa', cursive !important;"
      class="display-2 mb-5 text-center"
    >
      Blog
    </h1>
    <p class="text-center">no posts to show</p>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Blog extends Vue {
  @Prop({ required: true })
  id!: string;

  // data
  blogPosts: object[] = [];
}
</script>

<style></style>
