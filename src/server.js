const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.sendFile(
        path.resolve(__dirname, "index.html")
    );
});

app.use(express.static("build"));

app.listen(port, () => {
    console.log("Express has started");
});