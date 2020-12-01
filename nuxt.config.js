import colors from "vuetify/es5/util/colors"

export default {
  target: "static",

  head: {
    titleTemplate: "%s - Touha Zohair",
    title: "Touha Zohair",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I am a Full-stack developer. I build awesome user Experience for you",
      },
    ],
    link: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
    ],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/vuetify"],

  modules: ["nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: [
        "Satisfy&display=swap",
        "Catamaran:wght@500;700;900&display=swap",
      ],
    },
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      font: false,
    },
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },
}
