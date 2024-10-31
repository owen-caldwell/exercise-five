const express = require('express')
const app = express()
const port = 3000;

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.use(express.static("public"))

app.listen(port, () => {
    console.log(`Cool app listening on port ${port}`)
})

module.exports = app