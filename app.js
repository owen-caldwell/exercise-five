const express = require("express");
const firebase = require("firebase/app");
const app = express();
const port = 3000;

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf8LnNADugnRF1V_fT_vu--bdgxx3ptgg",
  authDomain: "exercise-five-11388.firebaseapp.com",
  projectId: "exercise-five-11388",
  storageBucket: "exercise-five-11388.firebasestorage.app",
  messagingSenderId: "529727071155",
  appId: "1:529727071155:web:d775370b5c24011ffd61c6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const createPostRoute = require("./routes/createPost.js");
const singlePostRoute = require("./routes/singlePost.js");

app.use("/", indexRoute);
app.use("/createPost", createPostRoute);
app.use("/post", singlePostRoute);
// app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Cool app listening on port ${port}`);
});

module.exports = app
