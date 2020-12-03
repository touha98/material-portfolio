<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-col
        v-for="project in projects"
        :key="project.slug"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card nuxt :to="'portfolio/' + project.slug">
          <v-img :lazy-src="project.thumbnail" :src="project.thumbnail">
          </v-img>
          <v-card-title>
            {{ project.title }}
          </v-card-title>
          <v-card-text>
            {{ project.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",
  transition: {
    name: "scroll-y-reverse-transition",
    mode: "out-in",
  },
  async asyncData({ $content }) {
    try {
      const projects = await $content("projects").fetch()
      return { projects }
    } catch (error) {
      return error
    }
  },
  data: () => ({
    projects: [],
  }),
}
</script>
