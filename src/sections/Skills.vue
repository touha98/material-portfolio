<template>
  <v-container class="justify-center pt-6 d-flex" fluid>
    <v-row :id="id" justify="center" align-content="center">
      <v-card dark elevation="0" class="container transparent">
        <v-card-title
          style=" font-family: 'Comfortaa', cursive !important;"
          class="justify-center headlines"
          :class="[isMobile ? 'display-1' : 'display-2']"
        >Skills</v-card-title>
        <v-card-text class="font-weight-bold">
          <v-skeleton-loader class="full-width" type="list"></v-skeleton-loader>
          <template v-for="(sector, i) in skills">
            <p
              :key="i"
              class="title default--text mb-0"
              style="font-family: 'Comfortaa', cursive !important;"
            >{{ sector.field }}</p>
            <v-sheet :key="-i - 1" class="mb-4 transparent">
              <v-chip
                label
                class="ma-1 default--text blue-grey darken-3"
                v-for="(skill, j) in sector.items"
                :key="`${i}${j}`"
              >
                <v-icon
                  v-if="skill.icon.split('-')[0] === 'mdi'"
                  left
                  class="default--text"
                >{{ skill.icon }}</v-icon>
                <span
                  v-else
                  style="font-size:17px !important;"
                  class="skilltxt--text mr-1 title"
                >{{ skill.icon }}</span>
                {{ skill.title }}
              </v-chip>
            </v-sheet>
          </template>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Skills extends Vue {
  @Prop() id!: string;
  get skills() {
    return this.$store.getters.skills;
  }
  get isMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }
}
</script>
