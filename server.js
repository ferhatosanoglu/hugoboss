const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.static(__dirname + "/dist/hugoboss"));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/hugoboss/index.html"));
});

app.listen(PORT, () => {
    console.log("Ready on http://localhost:" + PORT);
});