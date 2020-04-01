import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebaseConfig";
const db = firebase.firestore();
Vue.use(Vuex);

interface dataType {
  [key: string]: object;
}
export default new Vuex.Store({
  state: {
    data: <any>{
      personal: {},
      features: {},
      skills: {},
      address: {
        social_links: []
      }
    },
    projects: []
  },
  mutations: {},
  getters: {
    personal: function(state) {
      return state.data.personal;
    },
    address: function(state) {
      return state.data.address;
    },
    features: function(state) {
      const features = state.data.features;
      return features.items || features;
    },
    skills: function(state) {
      const skills = state.data.skills;
      return skills.items || skills;
    }
  },
  actions: {
    getData: function({ state }) {
      db.collection("data")
        .get()
        .then(querySnap => {
          querySnap.forEach(doc => {
            state.data[doc.id] = doc.data();
          });
        })
        .catch(err => console.log(err));
    }
  },
  modules: {}
});
