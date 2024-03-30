// Imports
const express = require("express");
const app = express();
const port = 5000;
// Static Files
app.use(express.static("public"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.render("index");
  }
});

//  Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));
