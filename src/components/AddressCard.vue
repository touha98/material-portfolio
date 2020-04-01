<template>
  <v-card tile class="full-width">
    <v-card-title>
      Address
    </v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item>
          <v-list-item-avatar size="30">
            <v-icon color="info">mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ address.full_name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar size="30" class="my-0">
            <v-icon color="info">mdi-map-marker</v-icon>
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
            <v-btn
              @click="mapmodal = !mapmodal"
              icon
              text
              small
              class="secondary--text"
            >
              <v-icon color="">mdi-google-maps</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar size="30" class="my-0">
            <v-icon color="info">mdi-at</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ address.email }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar size="30" class="my-0">
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
    <v-dialog max-width="500" v-model="mapmodal">
      <iframe
        :src="address.map_link"
        width="100%"
        height="450"
        frameborder="0"
        style="border:0;"
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </v-dialog>
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
  mapmodal = false;
}
</script>

<style></style>
