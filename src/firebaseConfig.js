// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgZvYiWzfyyuJF1lsAY2DdJzuhIzzzkjU",
  authDomain: "tindog-react-166e9.firebaseapp.com",
  databaseURL: "https://tindog-react-166e9-default-rtdb.firebaseio.com",
  projectId: "tindog-react-166e9",
  storageBucket: "tindog-react-166e9.appspot.com",
  messagingSenderId: "766906659974",
  appId: "1:766906659974:web:98e02ae4ed2ffdbbae8d07"
};

// Initialize Firebase
const appSettings = initializeApp(firebaseConfig);
export default appSettings;