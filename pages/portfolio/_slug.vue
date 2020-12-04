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
  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: "description",
          name: "og:description",
          content: this.project.description,
        },
        {
          hid: "image",
          name: "og:image",
          content: this.project.thumbnail,
        },
      ],
    }
  },
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 900px;
  margin: auto;
  .markdown-grid-item {
    max-width: 100%;
  }
  img {
    display: block;
    width: 100%;
    max-width: 350px;
    margin: 5px auto;
  }
}
</style>
