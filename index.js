const fs = require("fs");
// const ejs = require("ejs");
const express = require("express");
const app = express();

// app.engine("html", ejs.renderFile);
// app.set("views", "public");
// app.set("views engine", "html");

app.use(express.static("public"));

app.get("/", (req, res) => {
    var data = fs.readFileSync("database.json", "utf-8");
    var hashes = JSON.parse(data)["hashes"];
    var hash = hashes[Math.floor(Math.random() * hashes.length)];
    fs.writeFileSync("public/script.js", `window.location.hash = "${hash}";`);
    // res.render("index.html");
    res.end();
});

app.get("/favicon.ico", (req, res) => {
    res.end();
});

app.listen(process.env.PORT || 8080, () => {console.log(process.env.PORT)});