// import express
const express = require("express");
// define a router
const router = express.Router();
// initialize Firestore
const firestore = require("firebase/firestore");
// create a reference to the database
const db = firestore.getFirestore();


router.get("/", (request, response) => {
    const postsQuery = firestore.getDocs(firestore.collection(db, "posts"));
    const postsArray = [];
    postsQuery
    .then((res) => {
      res.forEach((post) => {
        postsArray.push({id: post.id, ...post.data()});
      });
      response.send(postsArray);
    })
    .catch((error) => {
      console.log(error);
      return response.send(error);
    });
});

module.exports = router;