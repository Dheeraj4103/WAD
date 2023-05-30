const express = require("express");
const db = require("./src/connection");
const path = require("path");
const fs = require("fs");

// const postModel = require('./postModel');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening to port ${port}`));

if (typeof document !== "undefined") {
  const form = document.getElementById("myForm").elements;
  const submit = document.getElementById("submit");
  const formdata = {
    fullname: form.item(0).value,
    username: form.item(1).value,
    password: form.item(1).value,
  };

  submit.onclick = (e) => {
    e.preventDefault();
    console.log("form submitted", formdata);
  };

  // Manipulating the DOM here
}
