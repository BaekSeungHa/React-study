import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "your apiKey",
  authDomain: "nwitter-xxxx.firebaseapp.com",
  projectId: "nwitter-xxxx",
  storageBucket: "nwitter-xxx.appspot.com",
  messagingSenderId: "xxxxxxxxxx",
  appId: "xxxxxxx",
};

const app = initializeApp(firebaseConfig);

export default app;
