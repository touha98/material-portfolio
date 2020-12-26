<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h3 class="text-center">FrontEnd frameworks and UI/UX</h3> </v-col
      ><v-card
        v-for="tool in frontend"
        :key="tool.name"
        :href="tool.url"
        target="_blank"
        elevation="0"
        color="transparent"
        min-width="130px"
        class="text-center my-5"
      >
        <v-icon size="50">{{ tool.icon }}</v-icon>
        <v-card-title class="justify-center pa-1">
          {{ tool.name }}
        </v-card-title>
      </v-card>
      <v-col cols="12"> <h3 class="text-center">BackEnd tools</h3> </v-col
      ><v-card
        v-for="tool in frontend"
        :key="tool.name"
        :href="tool.url"
        target="_blank"
        elevation="0"
        color="transparent"
        min-width="130px"
        class="text-center my-5"
      >
        <v-icon size="50">{{ tool.icon }}</v-icon>
        <v-card-title class="justify-center pa-1">
          {{ tool.name }}
        </v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Tools",
  data() {
    return {
      frontend: [
        {
          name: "Vue.js",
          icon: "mdi-vuejs",
          url: "https://vuejs.org/",
        },
        {
          name: "React",
          icon: "mdi-react",
          url: "https://reactjs.org/",
        },
        {
          name: "Nuxt.js",
          icon: "mdi-nuxt",
          url: "https://nuxtjs.org/",
        },
        {
          name: "Vuetify",
          icon: "mdi-vuetify",
          url: "https://vuetifyjs.com/",
        },
      ],
    }
  },
}
</script>
