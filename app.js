const express = require('express')
const app = express()
const port = 3000;

const indexRoute = require("./routes/index.js");
const createPostRoute = require("./routes/createPost.js");
const singlePostRoute = require("./routes/singlePost.js");

app.use("/", indexRoute);
app.use("/createPost", createPostRoute);
app.use("/post", singlePostRoute);
// app.use(express.static("public"))

app.listen(port, () => {
    console.log(`Cool app listening on port ${port}`)
})

// module.exports = app