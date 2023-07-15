const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Pooly Backend Test");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
