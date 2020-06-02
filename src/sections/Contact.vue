<template>
  <v-container fluid class="py-12 contact" :id="id">
    <h1
      style=" font-family: 'Comfortaa', cursive !important;"
      class="mb-5 text-center headlines"
      :class="[isMobile ? 'display-1' : 'display-2']"
    >Leave me a message</h1>
    <v-row>
      <v-col>
        <v-card dark elevation="0" tile class="container transparent contactCard">
          <v-card-text class="pb-0">
            <v-form v-model="form" ref="messageForm">
              <v-text-field
                :rules="rules"
                flat
                class="contacttxt--text"
                outlined
                v-model="msg.subject"
                label="subject"
              ></v-text-field>
              <v-text-field
                flat
                :rules="emailRules"
                class="contacttxt--text"
                outlined
                v-model="msg.email"
                label="your email address"
              ></v-text-field>

              <v-textarea
                :rules="descRules"
                flat
                class="contacttxt--text"
                outlined
                v-model="msg.message"
                label="message body"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :loading="btnLoading"
              :disabled="!form"
              @click="sendMessage"
              class="mx-auto px-6"
              elevation="0"
              tile
              large
            >send</v-btn>
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
@Component({
  computed: {
    ...mapGetters(["address"])
  }
})
export default class Contact extends Vue {
  @Prop({ required: true })
  id!: string;

  // data
  form = false;
  msg = {
    subject: "",
    message: "",
    email: ""
  };
  rules = [(v: string) => v.length >= 5 || "Enter at least 5 characters"];
  descRules = [
    (v: string) => v.length >= 20 || "minimum 20 characters required"
  ];
  emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+/.test(v) || "E-mail must be valid"
  ];
  btnLoading = false;

  get isMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }
  async sendMessage() {
    try {
      this.btnLoading = true;
      const collection = firebase.firestore().collection("messages");
      await collection.doc().set({
        ...this.msg,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        seen: false
      });
    } catch (error) {
      alert(error.message);
    }
    this.btnLoading = false;
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
