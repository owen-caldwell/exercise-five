const express = require('express')
const router = express.Router()

router.get("/", (request, response) => {
    response.send("create post!")
});

module.exports = router