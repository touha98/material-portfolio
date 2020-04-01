<template>
  <v-container class="my-5" :id="id">
    <h1
      style=" font-family: 'Comfortaa', cursive !important;"
      class="display-2 mb-5 text-center"
    >
      Contact me
    </h1>
    <v-row>
      <v-col cols="12" sm="6">
        <address-card :address="address" />
        <v-card tile class="full-width mt-2">
          <v-card-title>Socia links</v-card-title>
          <v-card-text>
            <v-btn
              target="_blank"
              :href="item.url"
              v-for="(item, i) in address.social_links"
              :key="i"
              class="secondary--text"
              icon
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card tile class="full-width fill-height contactCard">
          <v-card-text class="pb-0">
            <v-form ref="messageForm">
              <v-text-field
                :rules="rules"
                validate-on-blur
                solo
                dense
                flat
                class="secondary--text"
                outlined
                v-model="name"
                label="Full Name"
              ></v-text-field>
              <v-text-field
                validate-on-blur
                solo
                flat
                :rules="emailRules"
                dense
                class="secondary--text"
                outlined
                v-model="email"
                label="Email"
              ></v-text-field>

              <v-textarea
                :rules="descRules"
                solo
                validate-on-blur
                flat
                class="secondary--text"
                outlined
                v-model="message"
                label="Leave a message"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :loading="btnLoading"
              @click="sendMessage"
              class="info mx-auto px-6"
              elevation="0"
              tile
            >
              send
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "../firebaseConfig";
import { Component, Prop, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import AddressCard from "../components/AddressCard.vue";

@Component({
  computed: {
    ...mapGetters(["address"])
  },
  components: { AddressCard }
})
export default class Contact extends Vue {
  @Prop({ required: true })
  id!: string;

  // data
  name = "";
  email = "";
  message = "";
  rules = [(v: string) => v.length >= 5 || "Enter at least 5 characters"];
  descRules = [
    (v: string) => v.length >= 20 || "minimum 20 characters required"
  ];
  emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+/.test(v) || "E-mail must be valid"
  ];
  btnLoading = false;

  sendMessage() {
    const { name, email, message } = this;
    if ((this as any).$refs.messageForm.validate()) {
      this.btnLoading = true;
      firebase
        .firestore()
        .collection("messages")
        .doc()
        .set({
          name,
          email,
          time: firebase.firestore.FieldValue.serverTimestamp(),
          seen: false,
          message
        })
        .then(() => {
          this.btnLoading = false;
          alert("message sent successfully!");
        })
        .catch(err => {
          this.btnLoading = false;
          console.log(err);
        });
    }
  }
}
</script>

<style lang="scss">
.contactCard {
  .v-text-field {
    border-radius: 0px;
  }
}
</style>
