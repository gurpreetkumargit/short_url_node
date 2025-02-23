const express = require("express");
const urlRoute = require("./routes/url");
const mongoConnection = require("./connection");
const app = express();
const port = 8088;

mongoConnection("mongodb://localhost:27017/short-url");

app.use(express.json());

app.use("/url", urlRoute);

app.listen(port, () => {
  console.log(`app started in port ${port}`);
});
