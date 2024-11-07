const express = require('express')
const path = require('path')
const router = express.Router()
// initialize Firestore
const firestore = require("firebase/firestore");
// create a reference to the database
const db = firestore.getFirestore();

router.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, '../public', 'form.html'))
});

router.get('/submit', (request, response) => {
    const {title, postText, author} = request.query;
    const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();
    const setBlogPost = firestore.setDoc(
        firestore.doc(db, "posts", idFromTitle), {
            title: title,
            text: postText,
            author: author
        }
    );
    setBlogPost
        .then((res) => {
            response.send(`Good job!`)
        })
        .catch((error) => {
            response.send(`Error Submitting: ${error.toString()}`)
        });
})
module.exports = router