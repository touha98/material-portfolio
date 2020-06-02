<template>
  <v-card
    tile
    class="full-width addressCard"
  >
    <v-card-text>
      <v-list dense>
        <v-list-item>
          <v-list-item-avatar
            size="30"
            class="my-0"
          >
            <v-icon color="info">mdi-mailbox</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ address.address_line_1 }}
            </v-list-item-title>
            <v-list-item-title>
              {{ address.address_line_2 }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar
            size="30"
            class="my-0"
          >
            <v-icon color="info">mdi-at</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ address.email }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar
            size="30"
            class="my-0"
          >
            <v-icon color="info">mdi-phone</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ address.phone }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class AddressCard extends Vue {
  @Prop({ required: true })
  address!: string;

  //   data
}
</script>

<style lang="scss">
.addressCard {
  .v-list-item__title {
    text-overflow: unset;
    white-space: normal;
  }
}
</style>
