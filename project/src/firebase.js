// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_API_ID
// })

// export const auth = app.auth()
// export default app

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAlpTC1BZXCoIYj_0N2Ep-FuAyNl5grFic",
  authDomain: "company-event-management.firebaseapp.com",
  databaseURL: "https://company-event-management-default-rtdb.firebaseio.com",
  projectId: "company-event-management",
  storageBucket: "company-event-management.appspot.com",
  messagingSenderId: "884208275786",
  appId: "1:884208275786:web:332ad460f8dc43945af1b3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

export default app;
