const express = require("express");
const PORT = 8080;

const app = express();

const myFolder = __dirname + "/views";

app.set("view engine", "ejs");
app.set("views", myFolder);

app.get("/", (req, res) => {
  res.render("index", { pageTitle: "Index EJS", data: "EJS" });
});

app.get("/city", (req, res) => {
  res.render("myPage", { pageTitle: "My Page", city: "Pune" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
