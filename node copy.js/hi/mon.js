const express = require("express");
const bodyparser = require("body-parser");
const port = 8000;
const app = express();

const userRoute = require("./router");

// app.get("/payment", (request, response) => {
//   response.send("hello express   ks server");
// });

// app.post("/", (request, response) => {
//   //3
//   response.send("hello");
// });

// app.put("/", (request, response) => {
//   //3
//   response.send("hi yout put request succesful");
// });
app.use(bodyparser.json());
app.use("/", userRoute);

app.listen(port, () => {
  `server is running at localhost'${port}`;
});
