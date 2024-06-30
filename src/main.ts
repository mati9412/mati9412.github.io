import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG4tB9474zo_aK1hDbeNI18Wshz2Ucu3I",
  authDomain: "test-cbb5c.firebaseapp.com",
  projectId: "test-cbb5c",
  storageBucket: "test-cbb5c.appspot.com",
  messagingSenderId: "676259388093",
  appId: "1:676259388093:web:a7816043b8f887122b35d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(vuetify).mount('#app')
