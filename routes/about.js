const express = require("express");
const router = express.Router();

router.use('/', (req, res) => {
    res.send("About me")
});

router.use('/me', (req, res) => {
    res.send("About me")
});

module.exports = router;