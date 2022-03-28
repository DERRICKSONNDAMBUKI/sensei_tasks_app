const express = require("express");
app = express();
const cors = require("cors");

// routes
app.get("/", (req, res) => {
  try {
    res.send("<h1>Sensei Tasks Back-end</h1>");
  } catch (error) {
    console.error(error);
  }
});
// get all tasks



const server = app.listen(8080, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server is listening at http://${host}:${port}`);
});
