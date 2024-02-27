require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.js");

app.use("/", (req, res) => {
  connection.execute();
});
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log("API Server Running...");
});
