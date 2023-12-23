const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", (req, res) => {
  // console.log(__dirname); // we get folder name.
  // console.log(__filename); // we get folder and file name.

  // fs.writeFileSync("file.txt", "My First File.");
  // res.send(`<h1>Hello World</h1>`);

  // const filePath = path.join(__dirname, "myFiles", "txtFiles", "file.txt");
  // fs.writeFileSync(filePath, "Hello World");

  // const filePath = path.join(__dirname, "/myFiles/htmlFiles/index.html");
  const filePath = path.join(__dirname, "myFiles", "htmlFiles", "index.html");
  res.sendFile(filePath);
});

app.listen(8080);
