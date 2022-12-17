const connect = require("./mongoose");
const express = require("express");
const app = express();
const PORT = 8000;
const bp = require("body-parser");
// const router = require("../hi/router");
const router = require("./router");

connect();
app.use(bp.json());
app.use(router);

app.listen(PORT, () => console.log("working"));
