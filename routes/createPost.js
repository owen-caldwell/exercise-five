const express = require('express')
const router = express.Router()

router.get("/", (request, response) => {
    response.send("single post!")
});

module.exports = router