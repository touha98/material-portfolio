import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#03DAC6",
        dark: "#E1E1E1",
        secondary: "#BB86FC",
        background: {
          base: colors.blueGrey.darken4,
          lighten5: colors.blueGrey.lighten5,
          lighten2: colors.blueGrey.darken2,
        },
        default: colors.blueGrey.lighten4,
        error: colors.yellow.base,
        info: "#2196F3",
        features: colors.lime.darken4,
        featurestxt: colors.lime.lighten4,
        about: colors.lightBlue.accent4,
        abouttxt: colors.blue.lighten5,
        contact: colors.indigo.accent4,
        contacttxt: colors.indigo.lighten4,
      }
    }
  }
});
