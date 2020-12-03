<template>
  <v-container>
    <v-img
      width="100%"
      height="300px"
      :src="project.cover"
      :lazy-src="project.cover"
      class="align-center justify-center"
    >
      <div class="placeholder-div display-1">
        {{ project.title }}
      </div>
    </v-img>
    <article class="mt-12">
      <nuxt-content :document="project" />
    </article>
  </v-container>
</template>

<script>
export default {
  name: "Project",
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch()
    return { project }
  },
  data: () => ({
    project: {},
  }),
}
</script>

<style lang="scss">
.placeholder-div {
  color: white;
  max-width: 360px;
  padding: 20px;
  margin: auto;
  text-align: center;
  background: rgba(#000, 0.4);
}

.markdown-image-wrapper {
  max-width: 700px;
  margin: 0 auto;
  p {
    text-align: center;
  }
  img {
    width: 100%;
  }
}

.markdown-grid-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 900px;
  margin: auto;
  img {
    max-width: 350px;
    display: block;
    margin: 5px auto;
  }
}
</style>
