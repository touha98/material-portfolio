<template>
  <v-container class="my-5">
    <h1
      :id="id"
      style=" font-family: 'Comfortaa', cursive !important;"
      class="mb-5 mt-12 text-center headlines"
      :class="[isMobile ? 'display-1': 'display-2']"
    >Projects</h1>
    <v-row class="px-2 py-6">
      <v-col v-if="loading">
        <v-skeleton-loader dark tile type="card"></v-skeleton-loader>
      </v-col>
      <v-col class="pa-1" v-for="(project, i) in projects" :key="i" col="12">
        <v-card elevation="0" tile class="full-width blue-grey default--text darken-3">
          <v-carousel height="auto" hide-delimiters>
            <v-carousel-item v-for="img in project.images" :key="img">
              <v-img :lazy-src="img" :src="img"></v-img>
            </v-carousel-item>
          </v-carousel>
          <v-card-title class="headline headlines">{{project.title}}</v-card-title>
          <v-card-text class="default--text">{{project.overview}}</v-card-text>
          <v-card-actions>
            <a
              :href="project.url"
              style="text-decoration:none;"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn dark text>
                <v-icon class="mr-2">mdi-web</v-icon>live website
              </v-btn>
            </a>
            <a
              :href="project.github"
              style="text-decoration:none;"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn dark text>
                <v-icon class="mr-2">mdi-github</v-icon>github
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "../firebaseConfig";
import { Component, Prop } from "vue-property-decorator";

@Component({
  filters: {
    omit: function(val: string) {
      if (val.length > 300) {
        let i: number;
        for (i = 300; i < val.length; i++) {
          const char = val[i];
          if (char === " " && val[i + 10]) return val.substring(0, i) + "...";
        }
      }
      return val;
    }
  }
})
export default class Portfolio extends Vue {
  // props
  @Prop({ required: true })
  public id!: string;
  // data
  projects: object[] = [];
  loading = false;

  // computed
  get isMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }

  // hooks
  created() {
    this.fetchProjects();
  }
  // methods
  loaded(e: any) {
    console.log(e);
  }
  async fetchProjects() {
    try {
      this.loading = true;
      const query = firebase
        .firestore()
        .collection("projects")
        .orderBy("completed", "desc");
      const querySnap = await query.get();
      this.projects = [];
      querySnap.forEach((doc: any) => {
        this.projects.push(doc.data());
      });
    } catch (error) {
      alert(error.message);
    }
    this.loading = false;
  }
}
</script>

<style lang="scss">
.keyChips {
  .v-slide-group__content {
    justify-content: center;
  }
}
</style>
