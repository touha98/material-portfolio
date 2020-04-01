<template>
  <v-container class="my-5" :id="id">
    <h1
      style=" font-family: 'Comfortaa', cursive !important;"
      class="display-2 mb-5 text-center"
    >
      Projects
    </h1>
    <v-chip-group class="keyChips" multiple v-model="keys">
      <v-chip
        label
        :class="[keys.includes(key) ? 'info--text' : '']"
        :value="key"
        v-for="(key, j) in keywords"
        :key="j"
      >
        {{ key }}
      </v-chip>
    </v-chip-group>
    <v-row style="min-height:450px;" class="px-2 py-6">
      <v-col cols="12">
        <p
          v-if="projects.length && !projectsFiltered.length"
          class="text-center"
        >
          select a keyword
        </p>
      </v-col>
      <v-col
        class="pa-1"
        v-for="(project, i) in projectsFiltered"
        :key="i"
        col="12"
        sm="6"
      >
        <v-hover open-delay="100">
          <template v-slot:default="{ hover }">
            <v-card tile class="full-width">
              <v-img :src="project.image"></v-img>
              <v-fade-transition>
                <v-overlay
                  style="z-index: 1;"
                  :opacity="0.7"
                  v-if="hover"
                  absolute
                  color="black"
                >
                  <v-card elevation="0" class="transparent full-width">
                    <v-card-title>
                      {{ project.title }}
                    </v-card-title>
                    <v-card-text v-if="isMobile">
                      {{ project.overview | omit }}
                    </v-card-text>
                    <v-card-text v-else>
                      {{ project.overview }}
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        target="_blank"
                        :href="project.url"
                        text
                        class="info--text"
                        elevation="0"
                        >visit website</v-btn
                      >
                      <v-btn
                        target="_blank"
                        :href="project.github"
                        text
                        class="secondary--text"
                        elevation="0"
                      >
                        view on github</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
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
  keywords: string[] = [];
  keys: string[] = [];

  // computed
  get projectsFiltered() {
    return this.projects.filter((item: any) => {
      let i = 0;
      item.keywords.forEach((key: string) => {
        if (this.keys.includes(key)) i++;
      });
      return i;
    });
  }
  get isMobile() {
    return this.$vuetify.breakpoint.smAndDown;
  }

  // hooks
  created() {
    this.fetchProjects();
  }
  // methods
  fetchProjects() {
    firebase
      .firestore()
      .collection("projects")
      .orderBy("completed", "desc")
      .get()
      .then(querySnap => {
        this.projects = [];
        this.keywords = [];
        querySnap.forEach((doc: any) => {
          this.projects.push(doc.data());
          doc.data().keywords.forEach((key: any) => {
            if (!this.keywords.includes(key)) this.keywords.push(key);
          });
          this.keys = this.keywords;
        });
      });
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
