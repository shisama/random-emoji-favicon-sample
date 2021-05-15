const express = require("express");
const emoji = require("node-emoji");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { favicon: emoji.random().emoji });
});

// listen for req :)
const port = process.env.GLITCH_DEBUGGER ? null : 8080;
const listener = app.listen(port || process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});