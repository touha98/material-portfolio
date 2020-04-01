<template>
  <v-container class="my-5" :id="id">
    <v-card elevation="0" tile class="full-width transparent">
      <v-card-title
        style=" font-family: 'Comfortaa', cursive !important;"
        class="display-2 justify-center"
      >
        About
      </v-card-title>
      <v-card-text class="px-0">
        <v-row>
          <v-col v-for="(item, i) in features" :key="i" cols="6" sm="3">
            <features-card
              :icon="item.icon"
              :text="item.text"
              :title="item.title"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="5">
            <v-card tile class="full-width fill-height">
              <v-card-title class="justify-center font-weight-bold"
                >About me</v-card-title
              >
              <v-card-text class="font-weight-regular text-justify">
                {{ personal.aboutme }}
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="7">
            <v-card tile class="full-width">
              <v-card-title
                style="font-family: 'Comfortaa', cursive !important;"
                class="display-1"
              >
                Skills
              </v-card-title>
              <v-card-text class="font-weight-bold">
                <template v-for="(sector, i) in skills">
                  <p
                    :key="i"
                    class="title mb-0"
                    style="font-family: 'Comfortaa', cursive !important;"
                  >
                    {{ sector.field }}
                  </p>
                  <v-sheet :key="-i - 1" class="mb-4">
                    <v-chip
                      label
                      class="ma-1"
                      v-for="(skill, j) in sector.items"
                      :key="`${i}${j}`"
                    >
                      <v-icon
                        v-if="skill.icon.split('-')[0] === 'mdi'"
                        left
                        class="info--text"
                        >{{ skill.icon }}</v-icon
                      >
                      <span
                        v-else
                        style="font-size:17px !important;"
                        class="info--text mr-1 title"
                        >{{ skill.icon }}</span
                      >
                      {{ skill.title }}
                    </v-chip>
                  </v-sheet>
                </template>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import Vue from "vue";
import FeaturesCard from "../components/FeaturesCard.vue";
import firebase from "../firebaseConfig";
import { mapGetters } from "vuex";

const db = firebase.firestore();
export default Vue.extend({
  name: "About",
  components: { FeaturesCard },
  props: {
    id: String
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["personal", "features", "skills"])
  },
  watch: {},
  created() {}
});
</script>
