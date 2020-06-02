import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"
import firebaseConfig from '@/firebaseConf';

firebase.initializeApp(firebaseConfig);

export default firebase;
