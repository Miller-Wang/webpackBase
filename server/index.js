const express = require("express");

const app = express();

app.get("/api/list", (req, res) => {
  res.json({
    code: 0,
    list: [1, 2, 3, 4, 5],
  });
});

app.listen(4000, () => {
  console.log("listen on 4000");
});
