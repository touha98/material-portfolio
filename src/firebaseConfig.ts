import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBU8Pu9IDW0P1XknnCY9hHa8utVlsKwjM",
  authDomain: "touha2048.firebaseapp.com",
  databaseURL: "https://touha2048.firebaseio.com",
  projectId: "touha2048",
  storageBucket: "touha2048.appspot.com",
  messagingSenderId: "304108330657",
  appId: "1:304108330657:web:90651c89a3e9dffefddae0",
  measurementId: "G-3BE61C3BWF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
